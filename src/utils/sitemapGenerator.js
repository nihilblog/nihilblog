const fs = require('fs');
const prettier = require('prettier');
const getAllYearPosts = require('./mdx/getAllYearPosts');
const getAllYearIllusts = require('./mdx/getAllYearIllusts');
const getUTCString = require('./getUTCString');

const sitemapGenerator = async () => {
  const posts = getAllYearPosts('post');
  const notices = getAllYearPosts('notice');
  const illusts = getAllYearIllusts('illust');
  
  const AllPosts = posts.concat(notices, illusts);
  
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const defaultPages = [
    '/',
    '/blog',
    '/about',
    '/blog/categories',
    '/blog/tags',
    '/blog/illust/keywords',
  ];

  const basePath = 'https://nihilblog.github.io';
  
  const ruleSet = [];

  const defaultPagesRuleSet = defaultPages.map((path) => {
    return `
      <url>
        <loc>${basePath}${path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${ruleSet.join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
};

sitemapGenerator();

module.exports = sitemapGenerator;