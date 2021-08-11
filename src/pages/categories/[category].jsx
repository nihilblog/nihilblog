import React, { useCallback, useState } from 'react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import BlogLayout from '@/layouts/BlogLayout';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';
import { GoogleAd } from '@/components/ContentComponents';
import { P } from '@/components/PostComponents';
import { css } from '@emotion/react';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blogConfig';
import AlterPagination from '@/components/AlterPagination';
import PropTypes from 'prop-types';

const CategoryPostsPage = ({ category, PostsPages, }) => {
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
    pageName: `"${category}" 관련 포스트`,
    pageURL: `/tags/${category}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-tag-page' css={style}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {category} &rdquo; 카테고리 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 카테고리들을 보려면 상단 메뉴에서 카테고리 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos='top' margin='30' />
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')}
                type='post'
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
  const categories = await getTagsAndCategories('categories');

  return {
    paths: categories.map((category) => ({
      params: {
        category: category.categoryName,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post').filter(({ frontMatter, }) => frontMatter.categories.includes(params.category));

  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  return {
    props: {
      category: params.category,
      PostsPages,
    },
  };
};

export default CategoryPostsPage;

CategoryPostsPage.propTypes = {
  category: PropTypes.string,
  PostsPages: PropTypes.array,
};
