import React from 'react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import Link from 'next/link';
import getDate from '@/utils/getDate';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import PostContents from '@/components/LayoutComponensts/PostContents';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents/P';
import { A } from '@/components/PostComponents/A';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import { css } from '@emotion/react';

const BlogIndexPage = ({ posts, }) => {
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
            <BoxHeader i='f017' w='500' f='Free'>최근 포스트</BoxHeader>
            <P bottom='0'>가장 최근에 작성된 5건의 포스트입니다. 더 많은 포스트를 보고 싶으시다면 상단의 메뉴에서 <A href='/blog/post/page/1' type='blog'>포스트</A>페이지로 이동하세요.</P>
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
                      <span className='info-description'>
                        {frontMatter.description}
                      </span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getDate(frontMatter.createdAt)}</span>
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
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllYearPosts('post');

  return {
    props: {
      posts: posts.splice(0, 5),
    },
  };
};

export default BlogIndexPage;