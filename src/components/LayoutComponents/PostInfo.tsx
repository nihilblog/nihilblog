import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import getUTC9 from '@/utils/getUTC9';
import size from '@/data/size.data';
import { IFrontMatter, IPostString } from '@/types';
import { InfoP } from './InfoP';

interface Props {
  top?: string;
  bottom?: string;
  type?: IPostString;
  frontMatter?: IFrontMatter;
}

export const PostInfo = ({
  top = '30', bottom = '30', type, frontMatter,
}: Props) => {
  const {
    title, tags, categories, keywords, createdAt, updatedAt, drawDate,
  } = frontMatter;

  const postInfoStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    padding: 10px 10px 5px 10px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;

    & > h1 {
      font-weight: 900;
      letter-spacing: -1px;
      color: #ffffff;
      margin-bottom: 20px;
      background-color: #333333;
      border-radius: 5px;
      text-align: left;

      & > span {
        font-size: 140%;
        font-weight: inherit;
        color: inherit;
        padding: 20px 10px;
        line-height: 1.5;
        display: inline-block;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > h1 {font-size: ${size[4]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > h1 {font-size: ${size[5]};}
    }

    @media (min-width: 801px) {
      & > h1 {font-size: ${size[6]};}
    }
  `;

  return (
    <>
      <div css={postInfoStyle}>
        <h1><span>{title}</span></h1>
        {
          type === 'post'
            ? <InfoP top='10' bottom='10'><span>분류</span>포스트</InfoP>
            : type === 'notice'
              ? <InfoP top='10' bottom='10'><span>분류</span>공지</InfoP>
              : <InfoP top='10' bottom='10'><span>분류</span>일러스트</InfoP>
        }
        <InfoP top='10' bottom='5'><span>작성일</span>{getUTC9(createdAt as number)}</InfoP>
        {
          createdAt < updatedAt
            ? <InfoP top='10' bottom='5'><span>수정일</span>{getUTC9(updatedAt as number)}</InfoP>
            : ''
        }
        {
          type === 'illust'
            ? <InfoP top='10' bottom='10'><span>완성일</span>{getUTC9(drawDate as number)}</InfoP>
            : ''
        }
        {
          type === 'post'
            ? (
              <>
                <InfoP top='10' bottom='5'>
                  <span>카테고리</span>
                  {
                    categories.map((category) => (
                      <Link key={`category-${category}`} passHref href={`/categories/${category}`}>
                        <a className='post-info-category'><strong>{category}</strong></a>
                      </Link>
                    ))
                  }
                </InfoP>
                <InfoP top='5' bottom='0'>
                  <span>태그</span>
                  {
                    tags.map((tag) => (
                      <Link key={`tag-${tag}`} passHref href={`/tags/${tag}`}>
                        <a className='post-info-tag'><strong>{tag}</strong></a>
                      </Link>
                    ))
                  }
                </InfoP>
              </>
            )
            : ''
        }
        {
          type === 'illust'
            ? (
              <InfoP top='5' bottom='0'>
                <span>키워드</span>
                {
                  keywords.map((keyword) => (
                    <Link key={`keyword-${keyword}`} passHref href={`/illust/keywords/${keyword}`}>
                      <a className='post-info-keyword'><strong>{keyword}</strong></a>
                    </Link>
                  ))
                }
              </InfoP>
            )
            : ''
        }
      </div>
    </>
  );
};
