import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import getUTCString from '@/utils/getUTCString';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import BlogLayout from '@/layouts/BlogLayout';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import { GoogleAd, MDXComponents } from '@/components/ContentComponents';
import {
  PostContent, PostInfo, PostNavigation, Utterances
} from '@/components/LayoutComponents';
import { IPost, ISiteData } from '@/types';

const BlogNoticePage = ({ notice, prev, next, }: IPost) => {
  const { frontMatter, slug, source, } = notice;

  const siteData: ISiteData = {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: '',
    url: `/notice/${slug}`,
    type: 'article',
    image: frontMatter.coverImage ? frontMatter.coverImage : '',
    tag: 'notice',
    section: 'notice',
    created: getUTCString(frontMatter.createdAt),
    updated: getUTCString(frontMatter.updatedAt),
  };

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
  const posts = getAllYearMdx('notice');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.filePath.replace('.mdx', ''),
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
  const posts = getAllYearMdx('notice');
  const postIndex = posts.findIndex((post) => post.filePath.replace('.mdx', '') === params.slug);
  const prev = posts[postIndex + 1] || null;
  const next = posts[postIndex - 1] || null;
  const notice = await getPostBySlug('notice', params.slug);

  return {
    props: {
      notice,
      prev,
      next,
    },
  };
};

export default BlogNoticePage;
