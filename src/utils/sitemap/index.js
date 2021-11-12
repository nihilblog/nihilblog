const fs = require('fs');
const prettier = require('prettier');
const getUTCString = require('./getUTCString');
const getAllTimePost = require('./getAllTimePost');
const getTagsAndCategories = require('./getTagsAndCategories');

const sitemapGenerator = async () => {
  const AllPosts = getAllTimePost();

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const yearMonthArray = [
    '2021-05', '2021-06', '2021-07', '2021-08', '2021-09',
    '2021-10', '2021-11',
  ];

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
    {
      url: '/archive',
      priority: 0.7,
    },
  ].concat(yearMonthArray.map((item) => ({
    url: `/archive/${item}`,
    priority: 0.7,
  })));

  const basePath = 'https://nihilog.github.io';

  const ruleSet = [];

  const defaultPagesRuleSet = defaultPages.map(({ url, priority, }) => `
    <url>
      <loc>${basePath}${url}</loc>
      <changefreq>daily</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('');

  const AllPostsRuleSet = AllPosts.map(({ frontMatter, fullPath, }) => `
    <url>
      <loc>${basePath}${fullPath}</loc>
      <lastmod>${getUTCString(frontMatter.updatedAt)}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1</priority>
    </url>
  `).join('');

  ruleSet.push(defaultPagesRuleSet);
  ruleSet.push(AllPostsRuleSet);

  const tags = Object.keys(getTagsAndCategories('tags'));
  const categories = Object.keys(getTagsAndCategories('categories'));
  const keywords = Object.keys(getTagsAndCategories('keywords'));

  const tagsRuleSet = tags.map((tag) => `
    <url>
      <loc>${basePath}/tags/${tag}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const categoriesRuleSet = categories.map((category) => `
    <url>
      <loc>${basePath}/categories/${category}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const keywordsRuleSet = keywords.map((keyword) => `
    <url>
      <loc>${basePath}/illust/keywords/${keyword}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  ruleSet.push(tagsRuleSet);
  ruleSet.push(categoriesRuleSet);
  ruleSet.push(keywordsRuleSet);

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
