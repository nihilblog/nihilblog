import React from 'react';
import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import { IPostList, IPostsPage } from '@/types';
import getPages from '@/utils/getPages';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getPostList } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/Content/Box';
import { Pagination } from '@/components/Content/Pagination';
import { PostList } from '@/components/Content';

const BlogPostManagerPage = ({
  currentPage, prevPage, nextPage, postList, totalPages, PostListPages,
}: IPostsPage) => {
  const totalCount = getCount(PostListPages, 'postList');

  const BlogPostManagerPageStyle = css({
    '& > #post-list': {
      marginBottom: '50px',
    },
  });

  const siteMeta = useMetaData({
    title: '포스트 관리',
    url: `/view/${currentPage}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div css={BlogPostManagerPageStyle}>
          <Box top='100' bottom='50'>
            <BoxHeader i='f039' w='900' f='Free'>총 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>간단하게 포스트 제목과 주소를 볼 수 있게 만든 페이지.</P>
          </Box>
          <div id='post-list'>
            {postList.map((post) => (
              <PostList post={post} key={uuid()} />
            ))}
          </div>
          <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='view' />
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = getPostList();

  const PostsPages = getPages(postList, 10) as IPostList[][];

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
  const postList = getPostList();

  const PostListPages = getPages(postList, 10) as IPostList[][];
  const number = parseInt(params.pageNumber, 10);
  const prevPage = number === 1 ? null : number - 1;
  const nextPage = number === PostListPages.length ? null : number + 1;

  return {
    props: {
      PostListPages,
      postList: PostListPages[number - 1],
      prevPage,
      nextPage,
      currentPage: number,
      totalPages: PostListPages.length,
    },
  };
};

export default BlogPostManagerPage;
