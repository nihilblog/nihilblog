import { IPostList } from '@/types';
import { getAllTimePost } from './getAllTimePost';

export const getPostList = (): IPostList[] => {
  const posts = getAllTimePost();

  return posts.map((post) => ({
    id: post.frontMatter.id,
    title: post.frontMatter.title,
    type: post.frontMatter.type,
    link: post.fullPath,
    create: post.frontMatter.createdAt,
  }));
};
