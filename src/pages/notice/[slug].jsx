import React from 'react';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import PostNavigation from '@/components/PostNavigation';
import BlogLayout from '@/layouts/BlogLayout';
import { MDXRemote } from 'next-mdx-remote';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import { GoogleAd } from '@/components/ContentComponents';
import { PostContent, PostInfo, Utterances } from '@/components/LayoutComponensts';
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
          <PostInfo top='100' frontMatter={frontMatter} type='notice' />
          <PostContent idName='blog-post-content' frontMatter={frontMatter}>
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType='' />
            <GoogleAd pos='bottom' />
            <Utterances />
          </PostContent>
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
