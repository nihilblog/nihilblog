import React from 'react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogLayout from '@/layouts/BlogLayout';
import { BlogMessage, BlogSeriesList, GoogleAd } from '@/components/ContentComponents';
import { css } from '@emotion/react';
import { P } from '@/components/PostComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogIndexPage = ({ posts, notices, }) => {
  const style = css`
    margin-bottom: 100px;
  `;
  
  const siteData = {
    pageName: '홈',
    pageURL: '/blog',
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-index-page' css={style}>
          <Box>
            <BoxHeader i={'f017'} w={'500'} f={'Free'}>최근 공지사항 3건</BoxHeader>
            <P bottom={'0'}>최근 3건의 공지사항입니다. 니힐로그를 이용하는데에 있어서 도움이 될 수 있는 공지사항들입니다.</P>
          </Box>
          <GoogleAd pos={'top'} margin={'30'} />
          <div id={'blog-notice-list'}>
            {notices.map(({ frontMatter, filePath, }, index) => (
              <PostItemBox
                key={index + filePath.replace('.mdx', '')} type={'notice'}
                frontMatter={frontMatter} filePath={filePath}
              />
            ))}
          </div>
          <Box top={'100'}>
            <BoxHeader i='f017' w='500' f='Free'>최근 포스트 5건</BoxHeader>
            <P bottom='0'>최근 5건의 포스트입니다. 더 많은 포스트는 상단 메뉴의 포스트 링크를 클릭해주세요.</P>
          </Box>
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <PostItemBox
                key={index + filePath.replace('.mdx', '')} type={'post'}
                frontMatter={frontMatter} filePath={filePath}
              />
            ))}
          </div>
          <GoogleAd pos={'bottom'} margin={'30'} />
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllYearPosts('post');
  const notices = await getAllYearPosts('notice');

  return {
    props: {
      posts: posts.splice(0, 5),
      notices: notices.splice(0, 3),
    },
  };
};

export default BlogIndexPage;

BlogIndexPage.propTypes = {
  posts: PropTypes.array,
  notices: PropTypes.array,
};