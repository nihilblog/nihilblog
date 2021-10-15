import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import getUTCString from '@/utils/getUTCString';
import { GoogleAd, MDXComponents } from '@/components/ContentComponents';
import {
  PostContent, PostInfo, PostNavigation, Utterances
} from '@/components/LayoutComponents';
import { IPost } from '@/types';
import { useMetaData } from '@/hooks';

const BlogIllustPage = ({ illust, prev, next, }: IPost) => {
  const { frontMatter, slug, source, } = illust;
  const router = useRouter();

  const siteData = useMetaData({
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: `그림, 일러스트, 캐릭터, 컨셉아트, 디자인, 창작, 캐릭터디자인, 캐릭터일러스트, 판타지, illustration, artwork, character, fantasy, characterillustration, characterdesign, fantasycharacter, ${frontMatter.keywords.join(', ')}`,
    pageURL: `/illust/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: frontMatter.keywords.join(', '),
    pageSection: 'illust',
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  });

  return (
    <>
      <BlogLayout siteData={siteData}>
        <article id='blog-illust-list-page'>
          <PostInfo top='100' frontMatter={frontMatter} type='illust' />
          <PostContent idName='blog-post-content' frontMatter={frontMatter}>
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <Line />
            <CommentGuideMessage postType={router.pathname} />
            <GoogleAd pos='bottom' />
            <Utterances />
          </PostContent>
        </article>
        <PostNavigation prev={prev} next={next} type='illust' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const illusts = getAllYearMdx('illust');

  return {
    paths: illusts.map((illust) => ({
      params: {
        slug: illust.filePath.replace('.mdx', ''),
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
  const illusts = getAllYearMdx('illust');
  const illustIndex = illusts.findIndex((illust) => illust.filePath.replace('.mdx', '') === params.slug);
  const prev = illusts[illustIndex + 1] || null;
  const next = illusts[illustIndex - 1] || null;
  const illust = await getPostBySlug('illust', params.slug);

  return {
    props: {
      illust,
      prev,
      next,
    },
  };
};

export default BlogIllustPage;
