const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * @typedef {object} FrontMatter
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
 * @param {string} [year]
 * @param {string} [month]
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

module.exports = getAllMdx;
