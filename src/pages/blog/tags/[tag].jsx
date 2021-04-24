import React from 'react';
import { getAllYearPosts, getTagsAndCategories } from '@/lib/mdx';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents/P';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import Link from 'next/link';
import PostContents from '@/components/LayoutComponensts/PostContents';
import getDate from '@/utils/getDate';

const TagPostsPage = ({ posts, tag, }) => {
  const totalCount = posts.length;

  const siteData = {
    pageName: `"${tag}" 관련 포스트`,
    pageURL: `/blog/tags/${tag}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-tag-page'>
          <Box>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {tag} &rdquo; 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 태그들을 보려면 상단 메뉴에서 태그 페이지를 클릭하세요.</P>
          </Box>
          <div id='blog-post-list'>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <Box key={index}>
                <PostHeader i='f27a' w='900' f='Free'>
                  <Link href={`/blog/post/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <PostContents>
                  <p>
                    <span className='info-name'>포스트 설명</span><br />
                    <span className='info-description'>
                      {frontMatter.description}
                    </span>
                  </p>
                  <p>
                    <span className='info-name'>작성 날짜</span>
                    <span className='info-time'>{getDate(frontMatter.createdAt)}</span>
                  </p>
                  <p>
                    <span className='info-name'>카테고리</span>
                    {frontMatter.categories.map((category, index) => (
                      <Link href={`/blog/categories/${String(category)}`} key={index + category}>
                        <a className='info-category'>{category}</a>
                      </Link>
                    ))}
                  </p>
                  <p>
                    <span className='info-name'>태그</span>
                    {frontMatter.tags.map((tag, index) => (
                      <Link href={`/blog/tags/${String(tag)}`} key={index + tag}>
                        <a className='info-tag'>{tag}</a>
                      </Link>
                    ))}
                  </p>
                </PostContents>
              </Box>
            ))}
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const tags = await getTagsAndCategories('tags');

  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag: tag.tagName,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post').filter(({ frontMatter, }) => {
    return frontMatter.tags.includes(params.tag);
  });

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
};

export default TagPostsPage;