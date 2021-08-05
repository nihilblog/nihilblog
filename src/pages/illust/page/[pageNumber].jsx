import React, { useCallback } from 'react';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import BlogLayout from '@/layouts/BlogLayout';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import Pagination from '@/components/Pagination';
import { P } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogIllustListPage = ({ illusts, currentPage, prevPage, nextPage, totalPages, PostsPages, }) => {
  const getCount = useCallback(() => {
    let length = 0;
    
    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }
    
    return length;
  }, []);
  
  const totalCount = getCount();
  
  const siteData = {
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
          <GoogleAd pos='top' margin='30' />
          <div id='blog-post-list'>
            {illusts.map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')} type='illust'
                frontMatter={frontMatter} filePath={filePath}
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
  const illusts = await getAllYearIllusts('illust');
  
  const PostsPages = getPages(illusts, BlogConfig.postPerPage);
  
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
  const illusts = getAllYearIllusts('illust');
  
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

BlogIllustListPage.propTypes = {
  illusts: PropTypes.array,
  currentPage: PropTypes.number,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
  totalPages: PropTypes.number,
  PostsPages: PropTypes.array,
};
