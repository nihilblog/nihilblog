const fs = require('fs');
const prettier = require('prettier');
const getAllYearPosts = require('../utils/mdx/getAllYearPosts');
const getAllYearIllusts = require('../utils/mdx/getAllYearIllusts');

// 포스트 이름 배열
const postName = {
  post: getAllYearPosts('post').map(({ filePath, }) => {
    return filePath.replace('.mdx', '');
  }),
  notice: getAllYearPosts('notice').map(({ filePath, }) => {
    return filePath.replace('.mdx', '');
  }),
  illust: getAllYearIllusts('illust').map(({ filePath, }) => {
    return filePath.replace('.mdx', '');
  }),
};

const date = new Date();

const dateFormat = (date) => {
  const curr = new Date(date);
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const utcTime = new Date(utc);
  
  let YYYY = utcTime.getFullYear();
  
  let MM = utcTime.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;
  
  let DD = utcTime.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;
  
  let HH = utcTime.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;
  
  let mm = utcTime.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;
  
  let ss = utcTime.getSeconds();
  ss = ss >= 10 ? ss : `0${ss}`;
  
  return (
    `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}+09:00`
  );
};

const sitemapGenerator = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const dateTime = dateFormat(date);

  const defaultPages = [
    '/',
    '/blog',
    '/about',
    '/blog/categories',
    '/blog/tags',
    '/blog/illust/keywords',
  ].concat(postName.post.map((post) => {
    return `/blog/post/${post}`;
  }), postName.notice.map((post) => {
    return `/blog/notice/${post}`;
  }), postName.illust.map((post) => {
    return `/blog/illust/${post}`;
  }));

  const basePath = 'https://nihilblog.github.io';

  const ruleSet = defaultPages.map((path) => {
    return `
      <url>
        <loc>
          ${basePath}${path}
        </loc>
        <lastmod>${dateTime}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1</priority>
      </url>
    `;
  }).join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${ruleSet}
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