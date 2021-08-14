const getAllYearIllusts = require('./getAllYearIllusts');
const getAllYearPosts = require('./getAllYearPosts');

module.exports = (type = '') => {
  const initialBox = [];

  switch (type) {
    case 'keywords':
      getAllYearIllusts('illust').filter((illust) => {
        initialBox.push(illust.frontMatter.keywords);
      });
      break;
    case 'tags':
      getAllYearPosts('post').filter((post) => {
        initialBox.push(post.frontMatter.tags);
      });
      break;
    default:
      getAllYearPosts('post').filter((post) => {
        initialBox.push(post.frontMatter.categories);
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

  const FinallyArray = [];

  for (const key in ArraytoObject) {
    if (Object.prototype.hasOwnProperty.call(ArraytoObject, key)) {
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
  }

  FinallyArray.sort((a, b) => {
    switch (type) {
      case 'tags':
        return b.tagCount - a.tagCount;
      case 'categories':
        return b.categoryCount - a.categoryCount;
      default:
        return b.keywordCount - a.keywordCount;
    }
  });

  return FinallyArray;
};
