import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import BlogLayout from '@/layouts/BlogLayout';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import { P } from '@/components/PostComponents';
import {
  Box, BoxHeader, Pagination, PostItemBox
} from '@/components/LayoutComponents';
import { IPostsProps, ISiteData } from '@/types';
import getCount from '@/utils/getCount';

const BlogIllustListPage = ({
  illusts, currentPage, prevPage, nextPage, totalPages, PostsPages,
}: IPostsProps) => {
  const totalCount = getCount(PostsPages);

  const siteData: ISiteData = {
    pageName: `일러스트 목록 (${currentPage} 페이지)`,
    pageURL: `/illust/page/${currentPage}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-illust-list-page'>
          <Box top='100'>
            <BoxHeader i='f53f' w='900' f='Free'>전체 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>일반 포스트, 공지를 제외한 모든 일러스트의 목록을 확인할 수 있습니다. 일반 포스트와 공지는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <div id='blog-post-list'>
            {illusts.map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')}
                type='illust'
                frontMatter={frontMatter}
                filePath={filePath}
              />
            ))}
          </div>
        </div>
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const illusts = getAllYearMdx('illust');

  const PostsPages = getPages(illusts, BlogConfig.postPerPage);

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
  const illusts = getAllYearMdx('illust');

  const PostsPages = getPages(illusts, BlogConfig.postPerPage);
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
      illusts: PostsPages[number - 1],
      prevPage,
      nextPage,
      currentPage: number,
      totalPages: PostsPages.length,
    },
  };
};

export default BlogIllustListPage;
