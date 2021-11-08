import { IPosts } from '@/types';
import { getAllPost } from './getAllPost';

const years = [
  '2021', '2022', '2023',
];

const months = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
];

export const getAllTimePost = () => {
  let posts: IPosts[] = [];

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
    const beforeDate = a.frontMatter.createdAt as number;
    const afterDate = b.frontMatter.createdAt as number;

    return afterDate - beforeDate;
  });

  return posts;
};
