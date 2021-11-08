const getAllTimePost = require('./getAllTimePost');

/**
 * @param {('tags' | 'keywords' | 'categories')} type
 */
const getTagsAndCategories = (type) => {
  /** @type {string[][]} */
  const initialBox = [];

  switch (type) {
    case 'keywords': getAllTimePost()
      .filter((post) => post.frontMatter.type === 'illust')
      .filter((post) => { initialBox.push(post.frontMatter.keywords); });
      break;
    case 'tags': getAllTimePost()
      .filter((post) => post.frontMatter.type === 'post')
      .filter((post) => { initialBox.push(post.frontMatter.tags); });
      break;
    default: getAllTimePost()
      .filter((post) => post.frontMatter.type === 'post')
      .filter((post) => { initialBox.push(post.frontMatter.categories); });
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
