import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getAllYearMdx from '@/utils/mdx/getAllYearMdx';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blogConfig';
import { GoogleAd } from '@/components/ContentComponents';
import {
  AlterPagination, Box, BoxHeader, PostItemBox
} from '@/components/LayoutComponents';
import {
  IFirst, ILast, INext, IPostsProps, IPrev, ISiteData
} from '@/types';
import getCount from '@/utils/getCount';

const KeywordPostsPage = ({ PostsPages, keyword, }: IPostsProps) => {
  const [ postsIndex, setPostsIndex, ] = useState(0);

  const totalCount = getCount(PostsPages);

  const onClickPrev: IPrev = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(postsIndex - 1);
    }
  }, [ postsIndex, ]);

  const onClickNext: INext = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(postsIndex + 1);
    }
  }, [ postsIndex, ]);

  const onClickFirst: IFirst = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(0);
    }
  }, [ postsIndex, ]);

  const onClickLast: ILast = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(PostsPages.length - 1);
    }
  }, [ postsIndex, ]);

  const style = css`
    margin-bottom: 100px;
  `;

  const siteData: ISiteData = {
    pageName: `"${keyword}" 관련 일러스트`,
    pageURL: `/illust/keywords/${keyword}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-keyword-page' css={style}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {keyword} &rdquo; 키워드 관련 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>다른 키워드들을 보려면 상단 서브 메뉴에서 키워드 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos='top' />
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')}
                type='illust'
                frontMatter={frontMatter}
                filePath={filePath}
              />
            ))}
          </div>
          <GoogleAd pos='bottom' />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const keywords = getTagsAndCategories('keywords');

  return {
    paths: keywords.map((keyword) => ({
      params: {
        keyword: keyword.keywordName,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    keyword: string;
  },
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const illusts = getAllYearMdx('illust')
    .filter(({ frontMatter, }) => frontMatter.keywords.includes(params.keyword));

  const PostsPages = getPages(illusts, BlogConfig.postPerPage);

  return {
    props: {
      keyword: params.keyword,
      PostsPages,
    },
  };
};

export default KeywordPostsPage;
