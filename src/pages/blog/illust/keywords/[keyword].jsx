import React from 'react';
import { css } from '@emotion/react';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { P } from '@/components/PostComponents';
import Box from '@/components/LayoutComponensts/Box';
import Link from 'next/link';
import PostHeader from '@/components/LayoutComponensts/PostHeader';
import IllustBox from '@/components/LayoutComponensts/IllustBox';
import PostContents from '@/components/LayoutComponensts/PostContents';
import getUTC9 from '@/utils/getUTC9';
import GoogleAd from '@/components/ContentComponents/GoogleAd';

const KeywordPostsPage = ({ illusts, keyword, }) => {
  const totalCount = illusts.length;
  
  const style = css`
    margin-bottom: 100px;
  `;
  
  const siteData = {
    pageName: `"${keyword}" 관련 일러스트`,
    pageURL: `/blog/illust/keywords/${keyword}`,
  };
  
  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <div id='blog-keyword-page' css={style}>
          <Box>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {keyword} &rdquo; 관련 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>다른 키워드들을 보려면 상단 서브 메뉴에서 키워드 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd slot={'7775831240'} top={'true'} margin={'30'} />
          <div id='blog-post-list'>
            {illusts.map(({ frontMatter, filePath, }, index) => (
              <IllustBox key={index}>
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
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const keywords = await getTagsAndCategories('keywords');
  
  return {
    paths: keywords.map(keyword => {
      return {
        params: {
          keyword: keyword.keywordName,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const illusts = await getAllYearIllusts('illust').filter(({ frontMatter, }) => {
    return frontMatter.keywords.includes(params.keyword);
  });
  
  return {
    props: {
      illusts,
      keyword: params.keyword,
    },
  };
};

export default KeywordPostsPage;