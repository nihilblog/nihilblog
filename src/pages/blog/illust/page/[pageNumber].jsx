import React, { useCallback } from 'react';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import BlogLayout from '@/layouts/BlogLayout';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import IllustBox from '@/components/LayoutComponensts/IllustBox';
import getUTC9 from '@/utils/getUTC9';
import Link from 'next/link';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import PostContents from '@/components/LayoutComponensts/PostContents';
import Pagination from '@/components/Pagination';
import GoogleAd from '@/components/ContentComponents/GoogleAd';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents';
import Box from '@/components/LayoutComponensts/Box';

const BlogIllustListPage = ({ illusts, currentPage, prevPage, nextPage, totalPages, PostsPages, }) => {
  const getCount = useCallback(() => {
    let length = 0;
    
    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }
    
    return length;
  }, []);
  
  const totalCount = getCount();
  
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
          <Box>
            <BoxHeader i='f53f' w='900' f='Free'>전체 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>일반 포스트, 공지를 제외한 모든 일러스트의 목록을 확인할 수 있습니다. 일반 포스트와 공지는 각각의 링크를 이용하시기 바랍니다.</P>
          </Box>
          <GoogleAd slot={'7775831240'} top={'true'} margin={'30'} />
          <div id='blog-post-list'>
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
                      <span className={'info-time'}>{getUTC9(frontMatter.createdAt)}</span>
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
        </div>
        <GoogleAd slot={'6837513463'} margin={'30'} />
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
      PostsPages,
      illusts: PostsPages[parseInt(params.pageNumber) - 1],
      prevPage,
      nextPage,
      currentPage: parseInt(params.pageNumber),
      totalPages: PostsPages.length,
    },
  };
};

export default BlogIllustListPage;