import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { FaPaintBrush } from 'react-icons/fa';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/Post';
import { size } from '@/data';
import { IPostTCKPage } from '@/types';
import { useMetaData } from '@/hooks';
import { getTagsAndCategories } from '@/utils/mdx';
import { Box, BoxHeader } from '@/components/Content/Box';
import { GoogleAd } from '@/components/Content';

const KeywordsPage = ({ keywords, }: IPostTCKPage) => {
  const wordStyle = css`
    text-align: center;

    & > a {
      padding: 10px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 4px;
      border-radius: 10px;
      color: #555555;
      letter-spacing: -1px;
      background-color: #33333330;
      line-height: 1;

      & > svg {
        fill: #555555;
        margin-right: 5px;
      }

      &:hover {
        color: #ffffff;
        background-color: #333333;

        & > svg {
          fill: #ffffff;
        }
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

  const siteMeta = useMetaData({
    title: '일러스트 키워드 목록',
    url: '/illust/keywords',
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-keywords-page'>
          <Box bottom='100' top='100'>
            <BoxHeader i='f1fc' w='900' f='Free'>일러스트 키워드 목록</BoxHeader>
            <P>이 페이지는 일러스트와 관련된 키워드들이 모여있는 목록을 보여줍니다. 각 키워드에는 링크가 되어있고 어떤 키워드가 어떤 일러스트와 관련이 있는지 확인 할 수 있는 키워드 별 일러스트 목록을 제공합니다. 숫자는 관련된 일러스트의 수를 의미합니다.</P>
            <div css={wordStyle}>
              {keywords.map((keyword) => (
                <Link key={keyword.keywordName} href={`/illust/keywords/${keyword.keywordName}`}>
                  <a><FaPaintBrush />{keyword.keywordName} ({keyword.keywordCount}건)</a>
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
  const keywords = getTagsAndCategories('keywords');

  return {
    props: {
      keywords,
    },
  };
};

export default KeywordsPage;
