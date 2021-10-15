import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import { P } from '@/components/PostComponents';
import BlogLayout from '@/layouts/BlogLayout';
import size from '@/data/size';
import { Box, BoxHeader } from '@/components/LayoutComponents';
import { IPostTCKPage } from '@/types';
import { GoogleAd } from '@/components/ContentComponents';
import { useMetaData } from '@/hooks';

const CategoriesPage = ({ categories, }: IPostTCKPage) => {
  const wordStyle = css`
    text-align: center;

    & > a {
      padding: 5px 10px;
      display: inline-block;
      margin: 4px;
      border-radius: 10px;
      color: #555555;
      letter-spacing: -1px;
      background-color: #33333330;

      &:before {
        content: '\\f07c';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      &:hover {
        color: #ffffff;
        background-color: #333333;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > a {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > a {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > a {font-size: ${size[3]};}
    }
  `;

  const siteData = useMetaData({
    pageName: '카테고리 목록',
    pageURL: '/categories',
  });

  return (
    <>
      <BlogLayout siteData={siteData}>
        <div id='blog-categories-page'>
          <Box bottom='100' top='100'>
            <BoxHeader i='f07b' w='900' f='Free'>카테고리 목록</BoxHeader>
            <P>이 페이지는 포스트에 사용된 카테고리 목록을 보여줍니다. 각 카테고리에는 링크가 되어있고 어떤 카테고리에 어떤 포스트들이 들어있는지 확인 할 수 있는 카테고리 별 포스트 목록이 제공됩니다. 숫자는 사용된 포스트의 수를 의미합니다.</P>
            <div css={wordStyle}>
              {categories.map((category) => (
                <Link key={category.categoryName} href={`/categories/${category.categoryName}`}>
                  <a>{category.categoryName} ({category.categoryCount}건)</a>
                </Link>
              ))}
            </div>
          </Box>
        </div>
        <GoogleAd pos='bottom' />
      </BlogLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = getTagsAndCategories('categories');

  return {
    props: {
      categories,
    },
  };
};

export default CategoriesPage;
