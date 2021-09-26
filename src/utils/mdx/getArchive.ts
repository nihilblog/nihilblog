import { IArchive } from '@/types';
import getAllTypePosts from './getAllTypePosts';

const getArchive = () => {
  const yearMontBox: string[] = [];

  const posts = getAllTypePosts();

  posts.filter((post) => {
    yearMontBox.push(post.yearMonth);
  });

  interface IObject {
    [word: string]: number;
  }

  let CombineArray: string[] = [];
  let ArraytoObject: IObject;

  for (let i = 0; i < yearMontBox.length; i++) {
    CombineArray = CombineArray.concat(yearMontBox[i]);
  }

  ArraytoObject = CombineArray.reduce((pre, current) => {
    pre[current] = (pre[current] || 0) + 1;

    return pre;
  }, {});

  const FinallyArray: IArchive[] = [];

  for (const key in ArraytoObject) {
    if (Object.prototype.hasOwnProperty.call(ArraytoObject, key)) {
      let obj: IArchive;

      obj = {
        yearMonth: key,
        posts: posts.filter((post) => post.filePath.startsWith(key)),
      };

      FinallyArray.push(obj);
    }
  }

  return FinallyArray;
};

export default getArchive;
