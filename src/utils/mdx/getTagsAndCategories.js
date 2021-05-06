const getAllYearIllusts = require('./getAllYearIllusts');
const getAllYearPosts = require('./getAllYearPosts');

module.exports = (type = '') => {
  
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