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

const getTagsAndCategories = (type = '') => {

  const initialBox = [];
  
  const posts = getAllYearPosts('post').filter((post) => {
    if (type === 'tags') {
      initialBox.push(post.frontMatter.tags);
    } else {
      initialBox.push(post.frontMatter.categories);
    }
  });

  posts;

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
    } else {
      obj = {
        categoryName: key,
        categoryCount: ArraytoObject[key],
      };
    }

    FinallyArray.push(obj);
  }

  FinallyArray.sort((a, b) => {
    if (type === 'tags') {
      return b.tagCount - a.tagCount;
    } else {
      return b.categoryCount - a.categoryCount;
    }
  });

  return FinallyArray;
};

const getPages = (array, number) => {
  const length = array.length;
  const count = Math.floor(length / number) + (Math.floor(length % number) > 0 ? 1 : 0);
  const array2 = [];

  for (let i = 0; i < count; i++) {
    array2.push(array.splice(0, number));
  }

  return array2;
};

const tags = getTagsAndCategories('tags');
const categories = getTagsAndCategories('categories');


// 태그 배열
const tagArray = tags.map((tag) => {
  return tag.tagName;
});

// 카테고리 배열
const categoryArray = categories.map((category) => {
  return category.categoryName;
});

//포스트 페이지 배열
const posts = getAllYearPosts('post');
// const posts = getAllPosts('post', '2021');
const notices = getAllYearPosts('notice');

const postsPages = Array.from({ length: getPages(posts, 5).length, }, (_, index) => index + 1);
const noticesPages = Array.from({ length: getPages(notices, 5).length, }, (_, index) => index + 1);

// 포스트 이름 배열
const postName = {
  post: getAllYearPosts('post').map(({ filePath, }) => {
    return filePath.replace('.mdx', '');
  }),
  notice: getAllYearPosts('notice').map(({ filePath, }) => {
    return filePath.replace('.mdx', '');
  }),
};

const sitemapGenerator = async () => {

  const date = new Date().toISOString();
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const defaultPages = [
    '/',
    '/blog',
    '/about',
    '/blog/categories',
    '/blog/tags',
  ].concat(postsPages.map((page) => {
    return `/blog/post/page/${page}`;
  }), noticesPages.map((page) => {
    return `/blog/notice/page/${page}`;
  }), postName.post.map((post) => {
    return `/blog/post/${post}`;
  }), postName.notice.map((post) => {
    return `/blog/notice/${post}`;
  }), tagArray.map((tag) => {
    return `/blog/tags/${tag}`;
  }), categoryArray.map((category) => {
    return `/blog/categories/${category}`;
  }));

  const basePath = 'https://nihilblog.github.io';

  const ruleSet = defaultPages.map((path) => {
    return `
      <url>
        <loc>${basePath}${path}</loc>
        <lastmod>${date}</lastmod>
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