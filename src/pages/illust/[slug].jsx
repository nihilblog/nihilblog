import React from 'react';
import BlogLayout from '@/layouts/BlogLayout';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import { CommentGuideMessage, Line } from '@/components/PostComponents';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote';
import PostNavigation from '@/components/PostNavigation';
import { useRouter } from 'next/router';
import { GoogleAd } from '@/components/ContentComponents';
import { PostContent, PostInfo, Utterances } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const BlogIllustPage = ({ illust, prev, next, }) => {
  const { frontMatter, slug, source, } = illust;
  const router = useRouter();
  
  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: '그림, 일러스트, 캐릭터, 컨셉아트, 디자인, 창작, 캐릭터디자인, 캐릭터일러스트, 판타지, illustration, artwork, character, fantasy, characterillustration, characterdesign, fantasycharacter ' + frontMatter.keywords.join(', '),
    pageURL: `/illust/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: frontMatter.keywords.join(', '),
    pageSection: 'illust',
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  };
  
  return (
    <>
      <BlogLayout {...siteData}>
        <article id='blog-illust-list-page'>
          <PostInfo top={'100'} frontMatter={frontMatter} type={'illust'} />
          <PostContent idName={'blog-post-content'} frontMatter={frontMatter}>
            <GoogleAd pos={'top'} />
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType={router.pathname} />
            <GoogleAd pos={'bottom'} />
            <Utterances />
          </PostContent>
        </article>
        <PostNavigation prev={prev} next={next} type='illust' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const illusts = getAllYearIllusts('illust');
  
  return {
    paths: illusts.map(illust => {
      return {
        params: {
          slug: illust.filePath.replace('.mdx', ''),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const illusts = getAllYearIllusts('illust');
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

BlogIllustPage.propTypes = {
  illust: PropTypes.object,
  prev: PropTypes.object,
  next: PropTypes.object,
};