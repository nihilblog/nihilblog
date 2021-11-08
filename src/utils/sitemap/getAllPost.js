const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * @typedef {object} FrontMatter1
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} coverImage
 * @property {string[]} tags
 * @property {string[]} categories
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {string[]} keywords
 * @property {Date} drawDate
 * @property {boolean} display
 * @property {('post' | 'notice' | 'illust')} type
 */

/**
 * @typedef {object} FrontMatter2
 * @property {number} id
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
 * @property {('post' | 'notice' | 'illust')} type
 */

/**
 * @typedef {object} IPosts
 * @property {FrontMatter2} frontMatter
 * @property {string} slug
 * @property {string} fullPath
 */

/**
 * @param {string} [year]
 * @param {string} [month]
 * @returns {IPosts[]}
 */
const getAllPost = (year, month) => {
  const folderPath = path.join(process.cwd(), 'posts', `${year}/${month}`);
  const postPaths = fs.readdirSync(folderPath).filter((post) => /\.mdx?$/.test(post));

  const allPosts = postPaths.map((postFile) => {
    const source = fs.readFileSync(path.join(folderPath, postFile), 'utf8');
    const { data, } = matter(source);

    /** @type {FrontMatter1} */
    const newData = { ...data, };

    /** @type {FrontMatter2} */
    const frontMatter = {
      id: newData.id,
      title: newData.title,
      description: newData.description,
      coverImage: newData.coverImage,
      tags: newData.tags,
      categories: newData.categories,
      createdAt: data.createdAt.getTime() - 32400000,
      updatedAt: data.updatedAt.getTime() - 32400000,
      keywords: newData.keywords,
      drawDate: data.drawDate.getTime() - 32400000,
      display: newData.display,
      type: newData.type,
    };

    return {
      frontMatter,
      slug: postFile.replace('.mdx', ''),
      fullPath: `/${newData.type}/${postFile.replace('.mdx', '')}`,
    };
  });

  return allPosts.filter((post) => post.frontMatter.display === true);
};

module.exports = getAllPost;
