import React, { useCallback } from 'react';
import getPages from '@/utils/getPages';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogConfig from '@/data/blog.config';
import BlogLayout from '@/layouts/BlogLayout';
import Pagination from '@/components/Pagination';
import { P } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogPostListNumberPage = ({ currentPage, prevPage, nextPage, posts, totalPages, PostsPages, }) => {
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
          <Box top={'100'}>
            <BoxHeader i='f27a' w='900' f='Free'>전체 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>공지, 일러스트를 제외한 모든 포스트의 목록을 확인할 수 있습니다. 공지와 일러스트는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <GoogleAd pos={'top'} margin={'30'} />
          <div id={'blog-post-list'}>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <PostItemBox
                key={index + filePath.replace('.mdx', '')} type={'post'}
                frontMatter={frontMatter} filePath={filePath}
              />
            ))}
          </div>
        </div>
        <GoogleAd pos={'bottom'} margin={'30'} />
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('post');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  return {
    paths: PostsPages.map((page, index) => {
      return {
        params: {
          pageNumber: String(index + 1),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  const prevPage = parseInt(params.pageNumber) === 1
    ? null
    : parseInt(params.pageNumber) - 1;

  const nextPage = parseInt(params.pageNumber) === PostsPages.length
    ? null
    : parseInt(params.pageNumber) + 1;
  
  return {
    props: {
      PostsPages,
      posts: PostsPages[parseInt(params.pageNumber) - 1],
      prevPage,
      nextPage,
      currentPage: parseInt(params.pageNumber),
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