const getAllPost = require('./getAllPost');

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
 * @property {('post' | 'notice' | 'illust')} type
 */

/**
 * @typedef {object} IPosts
 * @property {FrontMatter} frontMatter
 * @property {string} slug
 * @property {string} fullPath
 */

const getAllTimePost = () => {
  const years = [
    '2021', '2022', '2023',
  ];

  const months = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12',
  ];

  /** @type {IPosts[]} */
  let posts = [];

  for (const year in years) {
    if (Object.prototype.hasOwnProperty.call(years, year)) {
      for (const month in months) {
        if (Object.prototype.hasOwnProperty.call(months, month)) {
          posts = posts.concat(getAllPost(years[year], months[month]));
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

module.exports = getAllTimePost;
