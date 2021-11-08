import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import {
  AlterPagination, Box, BoxHeader, PostItemBox
} from '@/components/LayoutComponents';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import config from '@/data/config.data';
import {
  IFirst,
  ILast,
  INext, IPostTCK, IPrev
} from '@/types';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getAllTimePost, getTagsAndCategories } from '@/utils/mdx';

const CategoryPostsPage = ({ category, PostsPages, }: IPostTCK) => {
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

  const siteMeta = useMetaData({
    title: `"${category}" 관련 포스트`,
    url: `/tags/${category}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-tag-page' css={style}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {category} &rdquo; 카테고리 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 카테고리들을 보려면 상단 메뉴에서 카테고리 링크를 클릭하세요.</P>
          </Box>
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='post'
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
  const categories = getTagsAndCategories('categories');

  return {
    paths: categories.map((category) => ({
      params: {
        category: category.categoryName,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    category: string;
  },
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const allPosts = getAllTimePost();

  const posts = allPosts.filter((post) => post.frontMatter.type === 'post')
    .filter(({ frontMatter, }) => frontMatter.categories.includes(params.category));

  const PostsPages = getPages(posts, config.postPerPage);

  return {
    props: {
      category: params.category,
      PostsPages,
    },
  };
};

export default CategoryPostsPage;
