import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import getPages from '@/utils/getPages';
import config from '@/data/config.data';
import { P } from '@/components/PostComponents';
import { IPosts, IPostsPage } from '@/types';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getAllTimePost } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/Content/Box';
import { GoogleAd, PostItemBox } from '@/components/Content';
import { Pagination } from '@/components/Content/Pagination';

const BlogIllustListPage = ({
  illusts, currentPage, prevPage, nextPage, totalPages, PostsPages,
}: IPostsPage) => {
  const totalCount = getCount(PostsPages);

  const siteMeta = useMetaData({
    title: `일러스트 목록 (${currentPage} 페이지)`,
    url: `/illust/page/${currentPage}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-illust-list-page'>
          <Box top='100'>
            <BoxHeader i='f53f' w='900' f='Free'>전체 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>일반 포스트, 공지를 제외한 모든 일러스트의 목록을 확인할 수 있습니다. 일반 포스트와 공지는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <div id='blog-post-list'>
            {illusts.map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='illust'
                frontMatter={frontMatter}
                slug={slug}
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
  const allPosts = getAllTimePost();

  const illusts = allPosts.filter((post) => post.frontMatter.type === 'illust');

  const PostsPages = getPages(illusts, config.postPerPage) as IPosts[][];

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

  const illusts = allPosts.filter((post) => post.frontMatter.type === 'illust');

  const PostsPages = getPages(illusts, config.postPerPage) as IPosts[][];
  const number = parseInt(params.pageNumber, 10);
  const prevPage = number === 1 ? null : number - 1;
  const nextPage = number === PostsPages.length ? null : number + 1;

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
