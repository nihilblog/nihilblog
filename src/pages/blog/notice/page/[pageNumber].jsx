import React from 'react';
import getPages from '@/utils/getPages';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogConfig from '@/data/blog.config';
import BlogLayout from '@/layouts/BlogLayout';
import Box from '@/components/LayoutComponensts/Box';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import Link from 'next/link';
import PostContents from '@/components/LayoutComponensts/PostContents';
import getUTC9 from '@/utils/getUTC9';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import Pagination from '@/components/Pagination';

const BlogNoticeListNumberPage = ({ currentPage, prevPage, nextPage, posts, totalPages, }) => {
  const siteData = {
    pageName: `공지 목록 (${currentPage} 페이지)`,
    pageURL: `/blog/notice/page/${currentPage}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-notice-pages'>
          {posts.map(({ frontMatter, filePath, }, index) => (
            <Box key={index + filePath.replace('.mdx', '')}>
              <PostHeader i='f0f3' w='900' f='Free'>
                <Link href={`/blog/notice/${filePath.replace('.mdx', '')}`}>
                  <a>{frontMatter.title}</a>
                </Link>
              </PostHeader>
              <div className={'illust-item-info'}>
                <div className={'item-left'}>
                  <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                </div>
                <PostContents>
                  <p>
                    <span className='info-name'>공지 설명</span><br />
                    <span className='info-description'>
                      {frontMatter.description}
                    </span>
                  </p>
                  <p>
                    <span className='info-name'>작성 날짜</span>
                    <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                  </p>
                </PostContents>
              </div>
            </Box>
          ))}
        </div>
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='notice' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllYearPosts('notice');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);
  
  return {
    paths: PostsPages.map((page, index) => {
      return {
        params: {
          pageNumber: String(index + 1),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('notice');

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  const prevPage = parseInt(params.pageNumber) === 1
    ? null
    : parseInt(params.pageNumber) - 1;

  const nextPage = parseInt(params.pageNumber) === PostsPages.length
    ? null
    : parseInt(params.pageNumber) + 1;
  
  return {
    props: {
      posts: PostsPages[parseInt(params.pageNumber) - 1],
      prevPage,
      nextPage,
      currentPage: parseInt(params.pageNumber),
      totalPages: PostsPages.length,
    },
  };
};

export default BlogNoticeListNumberPage;