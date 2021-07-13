import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import getUTCString from '@/utils/getUTCString';
import getUTC9 from '@/utils/getUTC9';
import BlogLayout from '@/layouts/BlogLayout';
import MDXComponents from '@/components/MDXComponents';
import PostNavigation from '@/components/PostNavigation';
import { CommentGuideMessage, Line, MainImage } from '@/components/PostComponents';
import { BlogMessage, BlogSeriesList, GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostInfo, Utterances } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogPostPage = ({ post, prev, next, }) => {
  const { frontMatter, slug, source, } = post;

  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: frontMatter.tags.join(', '),
    pageURL: `/blog/post/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: frontMatter.tags.join(', '),
    pageSection: frontMatter.categories.join(', '),
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <article id='blog-post-page'>
          <Box>
            <BoxHeader i='f27a' w='900' f='Free'>{frontMatter.title}</BoxHeader>
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
            <PostInfo name='태그' i='f02c' w='900' itemType='link' linkIcon='f02b'>
              {frontMatter.tags.map((tag, index) => (
                <Link href={`/blog/tags/${String(tag)}`} key={index + tag}>
                  <a>{tag}</a>
                </Link>
              ))}
            </PostInfo>
            <GoogleAd pos={'top'} />
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType={''} />
            <GoogleAd pos={'bottom'} />
            <Utterances />
          </Box>
        </article>
        <PostNavigation prev={prev} next={next} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('post');
  
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
  const posts = await getAllYearPosts('post');
  const postIndex = posts.findIndex((post) => post.filePath.replace('.mdx', '') === params.slug);
  const prev = posts[postIndex + 1] || null;
  const next = posts[postIndex - 1] || null;
  const post = await getPostBySlug('post', params.slug);

  return {
    props: {
      post,
      prev,
      next,
    },
  };
};

export default BlogPostPage;

BlogPostPage.propTypes = {
  post: PropTypes.object,
  prev: PropTypes.object,
  next: PropTypes.object,
};