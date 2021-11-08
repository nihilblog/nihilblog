import { ITCKObj, ITCKString } from '@/types';
import { getAllTimePost } from './getAllTimePost';

export const getTagsAndCategories = (type: ITCKString) => {
  const initialBox: string[][] = [];

  const posts = getAllTimePost();

  switch (type) {
    case 'keywords': getAllTimePost()
      .filter((post) => post.frontMatter.type === 'illust')
      .filter((post) => { initialBox.push(post.frontMatter.keywords); });
      break;
    case 'tags': getAllTimePost()
      .filter((post) => post.frontMatter.type === 'post')
      .filter((post) => { initialBox.push(post.frontMatter.tags); });
      break;
    case 'categories': getAllTimePost()
      .filter((post) => post.frontMatter.type === 'post')
      .filter((post) => { initialBox.push(post.frontMatter.categories); });
      break;
    case 'yearMonth': getAllTimePost()
      .filter((post) => { initialBox.push([ post.date.yearMonth, ]); });
      break;
    default:
      break;
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
      } else if (type === 'keywords') {
        obj = {
          keywordName: key,
          keywordCount: ArraytoObject[key],
        };
      } else if (type === 'yearMonth') {
        obj = {
          yearMonth: key,
          count: posts.filter((post) => post.slug.startsWith(key)).length,
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
      case 'keywords':
        return b.keywordCount - a.keywordCount;
      case 'yearMonth':
        return parseInt(b.yearMonth, 10) - parseInt(a.yearMonth, 10);
      default:
        return;
    }
  });

  return FinallyArray;
};
