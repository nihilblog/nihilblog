const getAllYearMdx = require('./getAllYearMdx');

/**
 * @param {('tags' | 'keywords' | 'categories')} type
 */
const getTagsAndCategories = (type) => {
  /** @type {string[][]} */
  const initialBox = [];

  switch (type) {
    case 'keywords':
      getAllYearMdx('illust').filter((illust) => {
        initialBox.push(illust.frontMatter.keywords);
      });
      break;
    case 'tags':
      getAllYearMdx('post').filter((post) => {
        initialBox.push(post.frontMatter.tags);
      });
      break;
    default:
      getAllYearMdx('post').filter((post) => {
        initialBox.push(post.frontMatter.categories);
      });
  }

  /** @type {string[]} */
  let CombineArray = [];

  /**
   * @typedef {Object} IObject
   * @property {[key: string]: number}
   */

  /** @type {IObject} */
  let ArraytoObject;

  for (let i = 0; i < initialBox.length; i++) {
    CombineArray = CombineArray.concat(initialBox[i]);
  }

  ArraytoObject = CombineArray.reduce((pre, current) => {
    pre[current] = (pre[current] || 0) + 1;

    return pre;
  }, {});

  return ArraytoObject;
};

module.exports = getTagsAndCategories;
