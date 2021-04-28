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
  const posts = getAllYearPosts(type).filter((post) => {
    return post.filePath.replace('.mdx', '') === slug;
  });

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