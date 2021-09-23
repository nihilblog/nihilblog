import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import {
  Box, BoxHeader, Pagination, PostList
} from '@/components/LayoutComponents';
import { P } from '@/components/PostComponents';
import { IPostsProps, ISiteData } from '@/types';
import getPages from '@/utils/getPages';
import getAllTypePosts from '@/utils/mdx/getAllTypePosts';
import getCount from '@/utils/getCount';

const BlogPostManagerPage = ({
  currentPage, prevPage, nextPage, posts, totalPages, PostsPages,
}: IPostsProps) => {
  const totalCount = getCount(PostsPages);

  const style = css`
    & > #post-list {
      margin-bottom: 50px;
    }
  `;

  const siteData: ISiteData = {
    pageName: '포스트 관리',
    pageURL: '/view',
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div css={style}>
          <Box top='100' bottom='50'>
            <BoxHeader i='f039' w='900' f='Free'>총 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>간단하게 포스트 제목과 주소를 볼 수 있게 만든 페이지.</P>
          </Box>
          <div id='post-list'>
            {posts.map(({ frontMatter, filePath, }) => (
              <PostList frontMatter={frontMatter} filePath={filePath} key={uuid()} />
            ))}
          </div>
          <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='view' />
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllTypePosts();

  const PostsPages = getPages(posts, 50);

  return {
    paths: PostsPages.map((page, index) => ({
      params: {
        pageNumber: String(index + 1),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    pageNumber: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const posts = getAllTypePosts();

  const PostsPages = getPages(posts, 50);
  const number = parseInt(params.pageNumber, 10);

  const prevPage = number === 1
    ? null
    : number - 1;

  const nextPage = number === PostsPages.length
    ? null
    : number + 1;

  return {
    props: {
      PostsPages,
      posts: PostsPages[number - 1],
      prevPage,
      nextPage,
      currentPage: number,
      totalPages: PostsPages.length,
    },
  };
};

export default BlogPostManagerPage;
