const fs = require('fs');
const prettier = require('prettier');
const getAllYearPosts = require('./mdx/getAllYearPosts');
const getAllYearIllusts = require('./mdx/getAllYearIllusts');
const getUTCString = require('./getUTCString');

const sitemapGenerator = async () => {
  const posts = getAllYearPosts('post');
  const notices = getAllYearPosts('notice');
  const illusts = getAllYearIllusts('illust');
  
  const AllPosts = posts.concat(notices, illusts).sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
  
    return beforeDate - afterDate;
  });
  
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const defaultPages = [
    {
      url: '/',
      priority: 1,
    },
    {
      url: '/about',
      priority: 0.7,
    },
    {
      url: '/categories',
      priority: 0.7,
    },
    {
      url: '/tags',
      priority: 0.7,
    },
    {
      url: '/illust/keywords',
      priority: 0.7,
    },
  ];

  const basePath = 'https://nihilog.github.io';
  
  const ruleSet = [];

  const defaultPagesRuleSet = defaultPages.map(({ url, priority, }) => {
    return `
      <url>
        <loc>${basePath}${url}</loc>
        <changefreq>daily</changefreq>
        <priority>${priority}</priority>
      </url>
    `;
  }).join('');
  
  const AllPostsRuleSet = AllPosts.map(({ frontMatter, fullPath, }) => {
    return `
      <url>
        <loc>${basePath}${fullPath}</loc>
        <lastmod>${getUTCString(frontMatter.updatedAt)}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1</priority>
      </url>
    `;
  }).join('');
  
  ruleSet.push(defaultPagesRuleSet);
  ruleSet.push(AllPostsRuleSet);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${ruleSet.join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
};

module.exports = sitemapGenerator;
