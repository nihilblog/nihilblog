import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import getPages from '@/utils/getPages';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogConfig from '@/data/blogConfig';
import BlogLayout from '@/layouts/BlogLayout';
import Pagination from '@/components/Pagination';
import { P } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';

const BlogPostListNumberPage = ({
  currentPage, prevPage, nextPage, posts, totalPages, PostsPages,
}) => {
  const getCount = useCallback(() => {
    let length = 0;

    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }

    return length;
  }, []);

  const totalCount = getCount();

  const siteData = {
    pageName: `포스트 목록 (${currentPage} 페이지)`,
    pageURL: `/notice/page/${currentPage}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-post-pages'>
          <Box top='100'>
            <BoxHeader i='f27a' w='900' f='Free'>전체 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>공지, 일러스트를 제외한 모든 포스트의 목록을 확인할 수 있습니다. 공지와 일러스트는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <GoogleAd pos='top' margin='30' />
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
        <GoogleAd pos='bottom' margin='30' />
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('post');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  return {
    paths: PostsPages.map((page, index) => ({
      params: {
        pageNumber: String(index + 1),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);
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

export default BlogPostListNumberPage;

BlogPostListNumberPage.propTypes = {
  posts: PropTypes.array,
  currentPage: PropTypes.number,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
  totalPages: PropTypes.number,
  PostsPages: PropTypes.array,
};
