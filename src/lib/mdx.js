import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const getAllPosts = (type = '', year = '') => {
  const postPath = path.join(process.cwd(), 'posts', type, year);
  const getPostPaths = fs.readdirSync(postPath).filter((path) => /\.mdx?$/.test(path));

  const Allposts = getPostPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postPath, filePath), 'utf8');
    const { data, content, } = matter(source);

    const createdAt = data.createdAt.getTime();
    const updatedAt = data.updatedAt.getTime();
    const drawDate = data.drawDate ? data.drawDate.getTime() : '';

    const frontMatter = data.drawDate
      ? {
        ...data,
        createdAt,
        updatedAt,
        drawDate,
      }
      : {
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

const illustsYears = [
  '2017', '2018', '2019', '2020', '2021',
];

export const getAllYearIllusts = (type = '') => {
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

// const years = [
//   '2022',
// ];

export const getAllYearPosts = (type = '') => {
  const posts2021 = getAllPosts(type, '2021');

  // let posts;
  // for (const year in years) {
  //   posts = posts2021.concat(getAllPosts(type, years[year]));
  // }

  // posts = posts.sort((a, b) => {
  //   const beforeDate = a.frontMatter.createdAt;
  //   const afterDate = b.frontMatter.createdAt;

  //   return afterDate - beforeDate;
  // });

  // return posts;

  const AllPosts = posts2021.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return afterDate - beforeDate;
  });

  return AllPosts;
};

export const getPostBySlug = async (type = '', slug = '') => {
  let posts;
  
  if (type !== 'illust') {
    posts = getAllYearPosts(type).filter((post) => {
      return post.filePath.replace('.mdx', '') === slug;
    });
  } else {
    posts = getAllYearIllusts(type).filter((post) => {
      return post.filePath.replace('.mdx', '') === slug;
    });
  }
  
  const { frontMatter, content, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-unwrap-images'),
      ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug,
  };
};

export const getTagsAndCategories = (type = '') => {

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