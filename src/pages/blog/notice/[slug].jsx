import React from 'react';
// import { css } from '@emotion/react';
import hydrate from 'next-mdx-remote/hydrate';
import getDate from '@/utils/getDate';
import MDXComponents from '@/components/MDXComponents';
import { getAllYearPosts, getPostBySlug } from '@/lib/mdx';
import Head from 'next/head';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import PostNavigation from '@/components/PostNavigation';
import { Message } from '@/components/PostComponents/Message';
import PostInfo from '@/components/LayoutComponensts/PostInfo';
import { MainImage } from '@/components/PostComponents/MainImage';
import BlogLayout from '@/layouts/BlogLayout';
import DottedLine from '@/components/LayoutComponensts/DottedLine';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';

const BlogNoticePage = ({ post, prev, next, }) => {
  const { frontMatter, slug, source, } = post;
  const content = hydrate(source, {
    components: MDXComponents,
  });

  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: '',
    pageURL: `/blog/post/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
  };

  return (
    <>
      <Head>
        <meta property='article:published_time' content={new Date(frontMatter.createdAt).toISOString()} />
        <meta property='article:modified_time' content={new Date(frontMatter.updatedAt).toISOString()} />
        <meta property='article:author' content='NIHILncunia' />
        <meta property='article:section' content={frontMatter.categories.join(', ')} />
        <meta property='article:tag ' content='블로그, blog, 공지사항, notice' />
      </Head>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <article id='blog-notice-page'>
          <Box>
            <BoxHeader i='f27a' w='900' f='Free'>{frontMatter.title}</BoxHeader>
            {
              frontMatter.coverImage
                ? <MainImage src={frontMatter.coverImage} alt={frontMatter.title} />
                : ''
            }
            <PostInfo name='작성 날짜' i='f017' w='500' itemType='p'>
              {getDate(frontMatter.createdAt)}
            </PostInfo>
            <PostInfo name='수정 날짜' i='f017' w='500' itemType='p'>
              {getDate(frontMatter.updatedAt)}
            </PostInfo>
            <DottedLine />
            <div id='content-block'>
              {content}
            </div>
            <Message color='blue' bottom='0'>
              포스트를 읽고 혹은 읽으면서 하고 싶은 말이 있다면 아래의 덧글창에 적어주시면 됩니다. 최대한 빠르게 확인하고 답변을 드리겠습니다. 이 포스트를 보신 모든 분들의 하루가 좋은 하루이길 바랍니다.
            </Message>
          </Box>
        </article>
        <PostNavigation prev={prev} next={next} type='notice' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('notice');
  
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.filePath.replace('.mdx', ''),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('notice');
  const postIndex = posts.findIndex((post) => post.filePath.replace('.mdx', '') === params.slug);
  const prev = posts[postIndex + 1] || null;
  const next = posts[postIndex - 1] || null;
  const post = await getPostBySlug('notice', params.slug);

  return {
    props: {
      post,
      prev,
      next,
    },
  };
};

export default BlogNoticePage;