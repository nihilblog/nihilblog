const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const prettier = require('prettier');

const getAllPosts = (type = '', year = '') => {
  const postPath = path.join(process.cwd(), 'posts', type, year);
  const getPostPaths = fs.readdirSync(postPath).filter((path) => /\.mdx?$/.test(path));

  const Allposts = getPostPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postPath, filePath), 'utf8');
    const { data, content, } = matter(source);

    const createdAt = data.createdAt.getTime();
    const updatedAt = data.updatedAt.getTime();

    const frontMatter = {
      ...data,
      createdAt,
      updatedAt,
    };
  
    return {
      frontMatter,
      filePath,
      content,
    };
  });

  const SortedAllPosts = Allposts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return afterDate - beforeDate;
  });

  return SortedAllPosts;
};

const getAllYearPosts = (type = '') => {
  const posts2021 = getAllPosts(type, '2021');

  const AllPosts = posts2021.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return afterDate - beforeDate;
  });

  return AllPosts;
};

const illustsYears = [
  '2017', '2018', '2019', '2020', '2021',
];

const getAllYearIllusts = (type = '') => {
  const illusts2016 = getAllPosts(type, '2016');
  
  let illusts;
  for (let year in illustsYears) {
    illusts = illusts2016.concat(getAllPosts(type, illustsYears[year]));
  }
  
  illusts = illusts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
    
    return afterDate - beforeDate;
  });
  
  return illusts;
};

const getTagsAndCategories = (type = '') => {
  
  const initialBox = [];
  
  if (type === 'keywords') {
    const illusts = getAllYearIllusts('illust').filter((illust) => {
      initialBox.push(illust.frontMatter.keywords);
    });
  } else {
    const posts = getAllYearPosts('post').filter((post) => {
      if (type === 'tags') {
        initialBox.push(post.frontMatter.tags);
      } else {
        initialBox.push(post.frontMatter.categories);
      }
    });
  }
  
  let ArraytoObject = [];
  
  for (let i = 0; i < initialBox.length; i++) {
    ArraytoObject = ArraytoObject.concat(initialBox[i]);
  }
  
  ArraytoObject = ArraytoObject.reduce((pre, current) => {
    pre[current] = (pre[current] || 0) + 1;
    
    return pre;
  }, {});
  
  let FinallyArray = [];
  for (let key in ArraytoObject) {
    let obj;
    
    if (type === 'tags') {
      obj = {
        tagName: key,
        tagCount: ArraytoObject[key],
      };
    } else if (type === 'categories') {
      obj = {
        categoryName: key,
        categoryCount: ArraytoObject[key],
      };
    } else {
      obj = {
        keywordName: key,
        keywordCount: ArraytoObject[key],
      };
    }
    
    FinallyArray.push(obj);
  }
  
  FinallyArray.sort((a, b) => {
    if (type === 'tags') {
      return b.tagCount - a.tagCount;
    } else if (type === 'categories') {
      return b.categoryCount - a.categoryCount;
    } else {
      return b.keywordCount - a.keywordCount;
    }
  });
  
  return FinallyArray;
};

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