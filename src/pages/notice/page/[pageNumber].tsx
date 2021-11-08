import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getPages from '@/utils/getPages';
import config from '@/data/config.data';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import { IPosts, IPostsPage } from '@/types';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getAllTimePost } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/BoxComponents';
import { PostItemBox, GoogleAd, Pagination } from '@/components/PostLayoutComponents';

const BlogNoticeListNumberPage = ({
  currentPage, prevPage, nextPage, notices, totalPages, PostsPages,
}: IPostsPage) => {
  const totalCount = getCount(PostsPages);

  const siteMeta = useMetaData({
    title: `공지 목록 (${currentPage} 페이지)`,
    url: `/notice/page/${currentPage}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-notice-pages'>
          <Box top='100'>
            <BoxHeader i='f0f3' w='900' f='Free'>전체 공지 {totalCount}건</BoxHeader>
            <P bottom='0'>일반 포스트, 일러스트를 제외한 모든 포스트의 목록을 확인할 수 있습니다. 일반 포스트와 일러스트는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <div id='blog-post-list'>
            {notices.map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='notice'
                frontMatter={frontMatter}
                slug={slug}
              />
            ))}
          </div>
        </div>
        <GoogleAd pos='bottom' />
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='notice' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllTimePost();

  const notices = allPosts.filter((post) => post.frontMatter.type === 'notice');

  const PostsPages = getPages(notices, config.postPerPage) as IPosts[][];

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
  const allPosts = getAllTimePost();

  const notices = allPosts.filter((post) => post.frontMatter.type === 'notice');

  const PostsPages = getPages(notices, config.postPerPage) as IPosts[][];
  const number = parseInt(params.pageNumber, 10);
  const prevPage = number === 1 ? null : number - 1;
  const nextPage = number === PostsPages.length ? null : number + 1;

  return {
    props: {
      PostsPages,
      notices: PostsPages[number - 1],
      prevPage,
      nextPage,
      currentPage: number,
      totalPages: PostsPages.length,
    },
  };
};

export default BlogNoticeListNumberPage;
