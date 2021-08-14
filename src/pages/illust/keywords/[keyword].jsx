import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blogConfig';
import AlterPagination from '@/components/AlterPagination';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';

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
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {keyword} &rdquo; 키워드 관련 일러스트 {totalCount}장</BoxHeader>
            <P bottom='0'>다른 키워드들을 보려면 상단 서브 메뉴에서 키워드 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos='top' margin='30' />
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
          <GoogleAd pos='bottom' margin='30' />
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
    paths: keywords.map((keyword) => ({
      params: {
        keyword: keyword.keywordName,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const illusts = await getAllYearIllusts('illust').filter(({ frontMatter, }) => frontMatter.keywords.includes(params.keyword));

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
  keyword: PropTypes.string,
};
