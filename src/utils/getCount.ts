import { IPosts } from '@/types';

const getCount = (array: IPosts[][]) => {
  let length = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    length += array[i].length;
  }

  return length;
};

export default getCount;
