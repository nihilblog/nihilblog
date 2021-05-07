import React from 'react';
import getUTC9 from '@/utils/getUTC9';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
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
import { DiscussionEmbed as Disqus } from 'disqus-react';
import BlogConfig from '@/data/blog.config';
import { MDXRemote } from 'next-mdx-remote';

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

  const DisqusConfig = {
    url: `${BlogConfig.siteURL}/blog/post/${slug}`,
    identifier: slug,
    title: `${frontMatter.title} - ${BlogConfig.title}`,
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
            <PostInfo name='수정 날짜' i='f017' w='500' itemType='p'>
              {getUTC9(frontMatter.updatedAt)}
            </PostInfo>
            <DottedLine />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <Message color='blue' bottom='40'>
              포스트를 읽고 혹은 읽으면서 하고 싶은 말이 있다면 아래의 덧글창에 적어주시면 됩니다. 최대한 빠르게 확인하고 답변을 드리겠습니다. 이 포스트를 보신 모든 분들의 하루가 좋은 하루이길 바랍니다.
            </Message>
            <Disqus shortname='nihil-beulrogeu' config={{ ...DisqusConfig, }} />
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