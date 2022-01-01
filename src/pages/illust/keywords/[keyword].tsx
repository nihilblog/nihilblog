import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import config from '@/data/config.data';
import {
  IFirst, ILast, INext, IPosts, IPostTCK, IPrev
} from '@/types';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getAllTimePost, getTagsAndCategories } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/Content/Box';
import { AlterPagination } from '@/components/Content/Pagination';
import { PostItemBox } from '@/components/Content';

const KeywordPostsPage = ({ PostsPages, keyword, }: IPostTCK) => {
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

  const KeywordPostsPage = css({
    marginBottom: '100px',
  });

  const siteMeta = useMetaData({
    title: `"${keyword}" 관련 일러스트`,
    url: `/illust/keywords/${keyword}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-keyword-page' css={KeywordPostsPage}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {keyword} &rdquo; 키워드 관련 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>다른 키워드들을 보려면 상단 서브 메뉴에서 키워드 링크를 클릭하세요.</P>
          </Box>
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='illust'
                frontMatter={frontMatter}
                slug={slug}
              />
            ))}
          </div>
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
  const allPosts = getAllTimePost();

  const illusts = allPosts.filter((post) => post.frontMatter.type === 'illust')
    .filter(({ frontMatter, }) => frontMatter.keywords.includes(params.keyword));

  const PostsPages = getPages(illusts, config.postPerPage) as IPosts[][];

  return {
    props: {
      keyword: params.keyword,
      PostsPages,
    },
  };
};

export default KeywordPostsPage;
