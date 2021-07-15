import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import Link from 'next/link';
import getUTC9 from '@/utils/getUTC9';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import AlterPagination from '@/components/AlterPagination';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostContents, PostHeader } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const KeywordPostsPage = ({ PostsPages, keyword, }) => {
  const [ postsIndex, setPostsIndex, ] = useState(0);
  
  const getCount = useCallback(() => {
    let length = 0;
    
    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }
    
    return length;
  }, []);
  
  const totalCount = getCount();
  
  const onClickPrev = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(postsIndex - 1);
    }
  }, [ postsIndex, ]);
  
  const onClickNext = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(postsIndex + 1);
    }
  }, [ postsIndex, ]);
  
  const onClickFirst = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(0);
    }
  }, [ postsIndex, ]);
  
  const onClickLast = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(PostsPages.length - 1);
    }
  }, [ postsIndex, ]);
  
  const style = css`
    margin-bottom: 100px;
  `;
  
  const siteData = {
    pageName: `"${keyword}" 관련 일러스트`,
    pageURL: `/illust/keywords/${keyword}`,
  };
  
  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-keyword-page' css={style}>
          <Box top={'100'}>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {keyword} &rdquo; 키워드 관련 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>다른 키워드들을 보려면 상단 서브 메뉴에서 키워드 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos={'top'} margin={'30'} />
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, filePath, }, index) => (
              <Box key={index}>
                <PostHeader i='f53f' w='900' f='Free'>
                  <Link href={`/illust/${filePath.replace('.mdx', '')}`}>
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
                        <Link href={`/illust/keywords/${String(keyword)}`} key={index + keyword}>
                          <a className='info-keyword'>{keyword}</a>
                        </Link>
                      ))}
                    </p>
                  </PostContents>
                </div>
              </Box>
            ))}
          </div>
          <GoogleAd pos={'bottom'} margin={'30'} />
          <AlterPagination
            prev={onClickPrev}
            next={onClickNext}
            first={onClickFirst}
            last={onClickLast}
            current={postsIndex}
            total={PostsPages.length}
          />
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
  
  const PostsPages = getPages(illusts, BlogConfig.postPerPage);
  
  return {
    props: {
      keyword: params.keyword,
      PostsPages,
    },
  };
};

export default KeywordPostsPage;

KeywordPostsPage.propTypes = {
  PostsPages: PropTypes.array,
  keywords: PropTypes.string,
};