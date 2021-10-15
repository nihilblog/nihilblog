import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getPages from '@/utils/getPages';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import config from '@/data/config.data';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import {
  Box, BoxHeader, Pagination, PostItemBox
} from '@/components/LayoutComponents';
import { IPostsPage } from '@/types';
import getCount from '@/utils/getCount';
import { GoogleAd } from '@/components/ContentComponents';
import { useMetaData } from '@/hooks';

const BlogPostListNumberPage = ({
  currentPage, prevPage, nextPage, posts, totalPages, PostsPages,
}: IPostsPage) => {
  const totalCount = getCount(PostsPages);

  const siteMeta = useMetaData({
    title: `포스트 목록 (${currentPage} 페이지)`,
    url: `/notice/page/${currentPage}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-post-pages'>
          <Box top='100'>
            <BoxHeader i='f27a' w='900' f='Free'>전체 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>공지, 일러스트를 제외한 모든 포스트의 목록을 확인할 수 있습니다. 공지와 일러스트는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')}
                type='post'
                frontMatter={frontMatter}
                filePath={filePath}
              />
            ))}
          </div>
        </div>
        <GoogleAd pos='bottom' />
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllYearMdx('post');

  const PostsPages = getPages(posts, config.postPerPage);

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
  const posts = getAllYearMdx('post');

  const PostsPages = getPages(posts, config.postPerPage);
  const number = parseInt(params.pageNumber, 10);
  const prevPage = number === 1 ? null : number - 1;
  const nextPage = number === PostsPages.length ? null : number + 1;

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

export default BlogPostListNumberPage;
