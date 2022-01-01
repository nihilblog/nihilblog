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
  GoogleAd, MDXComponents, PostContent, PostInfo, PostNavigation, Utterances
} from '@/components/Content';

const BlogPostPage = ({ post, prev, next, }: IPost) => {
  const { frontMatter, slug, source, } = post;

  const siteMeta = useMetaData({
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: frontMatter.tags.join(', '),
    url: `/post/${slug}`,
    type: 'article',
    image: frontMatter.coverImage ? frontMatter.coverImage : '',
    tag: frontMatter.tags.join(', '),
    section: frontMatter.categories.join(', '),
    created: getUTCString(frontMatter.createdAt as number),
    updated: getUTCString(frontMatter.updatedAt as number),
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <article id='blog-post-page'>
          <PostInfo top='100' frontMatter={frontMatter} type='post' />
          <PostContent idName='blog-post-content' frontMatter={frontMatter}>
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <Line />
            <CommentGuideMessage postType='' />
            <GoogleAd pos='bottom' />
            <Utterances />
          </PostContent>
        </article>
        <PostNavigation prev={prev} next={next} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllTimePost();

  const posts = allPosts.filter((post) => post.frontMatter.type === 'post');

  return {
    paths: posts.map(({ slug, }) => ({
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

  const posts = allPosts.filter((post) => post.frontMatter.type === 'post');

  const postIndex = posts.findIndex((post) => post.slug === params.slug);
  const prev = posts[postIndex + 1] || null;
  const next = posts[postIndex - 1] || null;
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
      prev,
      next,
    },
  };
};

export default BlogPostPage;
