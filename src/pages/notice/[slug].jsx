import React from 'react';
import getUTC9 from '@/utils/getUTC9';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import PostNavigation from '@/components/PostNavigation';
import BlogLayout from '@/layouts/BlogLayout';
import { MDXRemote } from 'next-mdx-remote';
import { CommentGuideMessage, Line, MainImage } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostInfo, Utterances } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogNoticePage = ({ post, prev, next, }) => {
  const { frontMatter, slug, source, } = post;

  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: '',
    pageURL: `/notice/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: 'notice',
    pageSection: 'notice',
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <article id='blog-notice-page'>
          <Box top={'100'}>
            <BoxHeader i='f0f3' w='900' f='Free'>{frontMatter.title}</BoxHeader>
            {
              frontMatter.coverImage
                ? <MainImage src={frontMatter.coverImage} alt={frontMatter.title} />
                : ''
            }
            <PostInfo name='작성 날짜' i='f017' w='500' itemType='p'>
              {getUTC9(frontMatter.createdAt)}
            </PostInfo>
            {
              frontMatter.updatedAt > frontMatter.createdAt
                ?
                (<PostInfo name='수정 날짜' i='f017' w='500' itemType='p'>
                  {getUTC9(frontMatter.updatedAt)}
                </PostInfo>)
                :
                ''
            }
            <GoogleAd pos={'top'} />
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType={''} />
            <GoogleAd pos={'bottom'} />
            <Utterances />
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

BlogNoticePage.propTypes = {
  post: PropTypes.object,
  prev: PropTypes.object,
  next: PropTypes.object,
};