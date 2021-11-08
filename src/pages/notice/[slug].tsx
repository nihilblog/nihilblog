import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import getUTCString from '@/utils/getUTCString';
import BlogLayout from '@/layouts/BlogLayout';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import { IPost } from '@/types';
import { useMetaData } from '@/hooks';
import { getAllTimePost, getSinglePost } from '@/utils/mdx';
import {
  PostInfo, PostContent, MDXComponents, GoogleAd, Utterances, PostNavigation
} from '@/components/PostLayoutComponents';

const BlogNoticePage = ({ notice, prev, next, }: IPost) => {
  const { frontMatter, slug, source, } = notice;

  const siteMeta = useMetaData({
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: '',
    url: `/notice/${slug}`,
    type: 'article',
    image: frontMatter.coverImage ? frontMatter.coverImage : '',
    tag: 'notice',
    section: 'notice',
    created: getUTCString(frontMatter.createdAt as number),
    updated: getUTCString(frontMatter.updatedAt as number),
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <article id='blog-notice-page'>
          <PostInfo top='100' frontMatter={frontMatter} type='notice' />
          <PostContent idName='blog-post-content' frontMatter={frontMatter}>
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <Line />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllTimePost();

  const notices = allPosts.filter((post) => post.frontMatter.type === 'notice');

  return {
    paths: notices.map(({ slug, }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const allPosts = getAllTimePost();

  const notices = allPosts.filter((post) => post.frontMatter.type === 'notice');

  const postIndex = notices.findIndex((post) => post.slug === params.slug);
  const prev = notices[postIndex + 1] || null;
  const next = notices[postIndex - 1] || null;
  const notice = await getSinglePost(params.slug);

  return {
    props: {
      notice,
      prev,
      next,
    },
  };
};

export default BlogNoticePage;
