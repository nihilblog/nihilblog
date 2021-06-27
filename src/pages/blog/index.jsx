import React from 'react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import Link from 'next/link';
import getUTC9 from '@/utils/getUTC9';
import BlogLayout from '@/layouts/BlogLayout';
import { BlogMessage, BlogSeriesList, GoogleAd } from '@/components/ContentComponents';
import { css } from '@emotion/react';
import { P } from '@/components/PostComponents';
import { Box, BoxHeader, PostContents, PostHeader } from '@/components/LayoutComponensts';

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
            <P bottom={'0'}>최근 3건의 공지사항입니다. 니힐 블로그를 이용하는데에 있어서 도움이 될 수 있는 공지사항들입니다.</P>
          </Box>
          <GoogleAd pos={'top'} margin={'30'} />
          <div id={'blog-notice-list'}>
            {notices.map(({ frontMatter, filePath, }, index) => (
              <Box key={index + filePath.replace('.mdx', '')}>
                <PostHeader i='f0f3' w='900' f='Free'>
                  <Link href={`/blog/notice/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <div className={'illust-item-info'}>
                  <div className={'item-left'}>
                    <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                  </div>
                  <PostContents>
                    <p>
                      <span className='info-name'>공지 설명</span><br />
                      <span className='info-description'>{frontMatter.description}</span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                    </p>
                  </PostContents>
                </div>
              </Box>
            ))}
          </div>
          <Box top={'100'}>
            <BoxHeader i='f017' w='500' f='Free'>최근 포스트 5건</BoxHeader>
            <P bottom='0'>최근 5건의 포스트입니다. 더 많은 포스트는 상단 메뉴의 포스트 링크를 클릭해주세요.</P>
          </Box>
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <Box key={index}>
                <PostHeader i='f27a' w='900' f='Free'>
                  <Link href={`/blog/post/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <div className={'illust-item-info'}>
                  <div className={'item-left'}>
                    <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                  </div>
                  <PostContents>
                    <p>
                      <span className='info-name'>포스트 설명</span><br />
                      <span className='info-description'>{frontMatter.description}</span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                    </p>
                    <p>
                      <span className='info-name'>카테고리</span>
                      {frontMatter.categories.map((category, index) => (
                        <Link href={`/blog/categories/${String(category)}`} key={index + category}>
                          <a className='info-category'>{category}</a>
                        </Link>
                      ))}
                    </p>
                    <p>
                      <span className='info-name'>태그</span>
                      {frontMatter.tags.map((tag, index) => (
                        <Link href={`/blog/tags/${String(tag)}`} key={index + tag}>
                          <a className='info-tag'>{tag}</a>
                        </Link>
                      ))}
                    </p>
                  </PostContents>
                </div>
              </Box>
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