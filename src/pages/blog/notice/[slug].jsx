import React from 'react';
import getUTC9 from '@/utils/getUTC9';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import PostNavigation from '@/components/PostNavigation';
import PostInfo from '@/components/LayoutComponensts/PostInfo';
import BlogLayout from '@/layouts/BlogLayout';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import { MDXRemote } from 'next-mdx-remote';
import GoogleAd from '@/components/ContentComponents/GoogleAd';
import { Line, MainImage } from '@/components/PostComponents';
import Utterances from '@/components/LayoutComponensts/Utterances';
import CommentGuideMessage from '@/components/PostComponents/CustomMessage/CommentGuideMessage';

const BlogNoticePage = ({ post, prev, next, }) => {
  const { frontMatter, slug, source, } = post;

  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: '',
    pageURL: `/blog/notice/${slug}`,
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
            <GoogleAd slot={'7775831240'} top={'true'} />
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType={''} />
            <GoogleAd slot={'6837513463'} />
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