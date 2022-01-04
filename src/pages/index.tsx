import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import { A, P } from '@/components/Post';
import { IBlogIndexPage } from '@/types';
import { useMetaData } from '@/hooks';
import { getAllTimePost } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/Content/Box';
import { BlogMessageBlock, BlogSeriesBlock } from '@/components/Layout';
import { GoogleAd, PostItemBox } from '@/components/Content';

const BlogIndexPage = ({ posts, notices, }: IBlogIndexPage) => {
  const BlogIndexPageStyle = css`
    margin-bottom: 100px;
  `;

  const siteMeta = useMetaData({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <BlogMessageBlock />
        <BlogSeriesBlock />
        <div id='blog-index-page' css={BlogIndexPageStyle}>
          <Box>
            <BoxHeader i='f017' w='500' f='Free'>최근 공지사항 3건</BoxHeader>
            <P bottom='0'>니힐로그와 관련된 공지사항입니다. 전체 공지사항 목록은 <A type='blog' href='/notice/page/1'>이 링크</A>를 이용하시면 됩니다.</P>
          </Box>
          <div id='blog-notice-list'>
            {notices.map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='notice'
                frontMatter={frontMatter}
                slug={slug}
              />
            ))}
          </div>
          <Box top='100'>
            <BoxHeader i='f017' w='500' f='Free'>최근 포스트 5건</BoxHeader>
            <P bottom='0'>최근에 작성한 포스트 목록입니다. 전체 포스트 목록은 <A type='blog' href='/post/page/1'>이 링크</A>를 이용하시면 됩니다.</P>
          </Box>
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='post'
                frontMatter={frontMatter}
                slug={slug}
              />
            ))}
          </div>
          <GoogleAd pos='bottom' />
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllTimePost();

  const posts = allPosts.filter((post) => post.frontMatter.type === 'post');
  const notices = allPosts.filter((post) => post.frontMatter.type === 'notice');

  return {
    props: {
      posts: posts.splice(0, 5),
      notices: notices.splice(0, 3),
    },
  };
};

export default BlogIndexPage;
