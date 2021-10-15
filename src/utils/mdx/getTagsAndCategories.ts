import { ITCKObj, ITCKString } from '@/types';
import getAllYearMdx from './getAllYearMdx';

const getTagsAndCategories = (type: ITCKString) => {
  const initialBox: string[][] = [];

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

  interface IObject {
    [word: string]: number;
  }

  let CombineArray: string[] = [];
  let ArraytoObject: IObject;

  for (let i = 0; i < initialBox.length; i++) {
    CombineArray = CombineArray.concat(initialBox[i]);
  }

  ArraytoObject = CombineArray.reduce((pre, current) => {
    pre[current] = (pre[current] || 0) + 1;

    return pre;
  }, {});

  const FinallyArray: ITCKObj[] = [];

  for (const key in ArraytoObject) {
    if (Object.prototype.hasOwnProperty.call(ArraytoObject, key)) {
      let obj: ITCKObj;

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

export default getTagsAndCategories;
