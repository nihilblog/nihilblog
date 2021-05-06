import React from 'react';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import BlogLayout from '@/layouts/BlogLayout';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import IllustBox from '@/components/LayoutComponensts/IllustBox';
import getDate from '@/utils/getDate';
import Link from 'next/link';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import PostContents from '@/components/LayoutComponensts/PostContents';
import Pagination from '@/components/Pagination';

const BlogIllustListPage = ({ illusts, currentPage, prevPage, nextPage, totalPages, }) => {
  const siteData = {
    pageName: `일러스트 목록 (${currentPage} 페이지)`,
    pageURL: `/blog/illust/page/${currentPage}`,
  };
  
  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-illust-list-page'>
          {illusts.map(({ frontMatter, filePath, }, index) => (
            <IllustBox key={index + filePath.replace('.mdx', '')}>
              <PostHeader i='f53f' w='900' f='Free'>
                <Link href={`/blog/illust/${filePath.replace('.mdx', '')}`}>
                  <a>{frontMatter.title}</a>
                </Link>
              </PostHeader>
              <div className={'illust-item-info'}>
                <div className={'item-left'}>
                  <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                </div>
                <PostContents type={'illust'}>
                  <p>
                    <span className={'info-name'}>일러스트 설명</span><br />
                    <span className={'info-description'}>{frontMatter.description}</span>
                  </p>
                  <p>
                    <span className={'info-name'}>작성 날짜</span>
                    <span className={'info-time'}>{getDate(frontMatter.createdAt)}</span>
                  </p>
                  <p>
                    <span className={'info-name'}>키워드</span>
                    {frontMatter.keywords.map((keyword, index) => (
                      <Link href={`/blog/illust/keywords/${String(keyword)}`} key={index + keyword}>
                        <a className='info-keyword'>{keyword}</a>
                      </Link>
                    ))}
                  </p>
                </PostContents>
              </div>
            </IllustBox>
          ))}
        </div>
        <Pagination prev={prevPage} next={nextPage} total={totalPages} current={currentPage} type='post' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const illusts = await getAllYearIllusts('illust');
  
  const PostsPages = getPages(illusts, BlogConfig.postPerPage);
  
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
  const illusts = getAllYearIllusts('illust');
  
  const PostsPages = getPages(illusts, BlogConfig.postPerPage);
  
  const prevPage = parseInt(params.pageNumber) === 1
    ? null
    : parseInt(params.pageNumber) - 1;
  
  const nextPage = parseInt(params.pageNumber) === PostsPages.length
    ? null
    : parseInt(params.pageNumber) + 1;
  
  return {
    props: {
      illusts: PostsPages[parseInt(params.pageNumber) - 1],
      prevPage,
      nextPage,
      currentPage: parseInt(params.pageNumber),
      totalPages: PostsPages.length,
    },
  };
};

export default BlogIllustListPage;