import { IPostList, IPosts } from '@/types';

type TwoType = (IPosts[][] | IPostList[][]);

const getCount = (array: TwoType, type: ('posts' | 'postList') = 'posts') => {
  let length = 0;

  if (type === 'posts') {
    for (let i = 0; i <= (array as IPosts[][]).length - 1; i++) {
      length += (array as IPosts[][])[i].length;
    }
  } else {
    for (let i = 0; i <= (array as IPostList[][]).length - 1; i++) {
      length += (array as IPostList[][])[i].length;
    }
  }

  return length;
};

export default getCount;
