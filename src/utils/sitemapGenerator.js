const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const prettier = require('prettier');

/**
 * @param {(number)} date
 */
const getUTCString = (date) => {
  const Default = new Date(date);
  const UTC = Default.getTime() + (Default.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const UTCTime = new Date(UTC + KR_TIME_DIFF);

  const YYYY = UTCTime.getFullYear();

  let MM = UTCTime.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD = UTCTime.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  let HH = UTCTime.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;

  let mm = UTCTime.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;

  let ss = UTCTime.getSeconds();
  ss = ss >= 10 ? ss : `0${ss}`;

  return (
    `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}+09:00`
  );
};

/**
 * @typedef {object} FrontMatter
 * @property {string} title
 * @property {string} description
 * @property {string} coverImage
 * @property {string[]} tags
 * @property {string[]} categories
 * @property {number} createdAt
 * @property {number} updatedAt
 * @property {string[]} keywords
 * @property {number} drawDate
 * @property {boolean} display
 * @property {boolean} notice
 */

/**
 * @typedef {object} IPosts
 * @property {FrontMatter} frontMatter
 * @property {string} filePath
 * @property {string} fullPath
 * @property {string} content
 */

/**
 * @param {('post' | 'notice' | 'illust')} type
 * @param {string} year
 * @param {string} month
 * @returns {IPosts[]}
 */
const getAllMdx = (type, year, month) => {
  const folderPath = path.join(process.cwd(), 'posts', `${type}/${year}/${month}`);
  const postPaths = fs.readdirSync(folderPath).filter((p) => /\.mdx?$/.test(p));

  const allPosts = postPaths.map((file) => {
    const source = fs.readFileSync(path.join(folderPath, file), 'utf8');
    const { data, content, } = matter(source);

    /** @type {FrontMatter} */
    const frontMatter = {
      ...data,
      createdAt: data.createdAt.getTime() - 32400000,
      updatedAt: data.updatedAt.getTime() - 32400000,
      drawDate: data.drawDate.getTime() - 32400000,
    };

    return {
      frontMatter,
      filePath: file,
      fullPath: `/${type}/${file.replace('.mdx', '')}`,
      content,
    };
  });

  return allPosts.filter((post) => post.frontMatter.display === true);
};

/**
 * @param {('post' | 'notice' | 'illust')} type
 */
const getAllYearMdx = (type) => {
  const years = [
    '2022', '2023',
  ];

  const months = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
  ];

  let posts = getAllMdx(type, '2021', '05');

  const month2021 = [ '06', '07', '08', '09', '10', '11', '12', ];

  for (const month in month2021) {
    if (Object.prototype.hasOwnProperty.call(month2021, month)) {
      posts = posts.concat(getAllMdx(type, '2021', month2021[month]));
    }
  }

  for (const year in years) {
    if (Object.prototype.hasOwnProperty.call(years, year)) {
      for (const month in months) {
        if (Object.prototype.hasOwnProperty.call(months, month)) {
          posts = posts.concat(getAllMdx(type, years[year], months[month]));
        }
      }
    }
  }

  posts = posts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return afterDate - beforeDate;
  });

  return posts;
};

const sitemapGenerator = async () => {
  const posts = getAllYearMdx('post');
  const notices = getAllYearMdx('notice');
  const illusts = getAllYearMdx('illust');

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
