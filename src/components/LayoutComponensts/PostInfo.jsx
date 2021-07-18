import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import getUTC9 from '@/utils/getUTC9';
import Link from 'next/link';
import size from '@/data/size';

export const PostInfo = ({ top = '30', bottom = '30', type, frontMatter, }) => {
  const { title, tags, categories, keywords, createdAt, updatedAt, } = frontMatter;

  const postInfoStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    padding: 10px 10px 7px 10px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    
    & > h1 {
      font-weight: 900;
      letter-spacing: -1px;
      color: #ffffff;
      margin-bottom: 20px;
      transition: all 0.3s;
      background-color: #333333;
      border-radius: 5px;
      text-align: justify;
      
      & > span {
        font-size: 140%;
        font-weight: inherit;
        color: inherit;
        padding: 20px 10px;
        line-height: 1.5;
        display: inline-block;
      }
    }
    
    & > p {
      margin: 8px 0;
      transition: all 0.3s;
      letter-spacing: -1px;
      line-height: 1;
      font-weight: 500;
      text-align: justify;
      
      &:nth-of-type(1) {
        margin-top: 0;
      }
      
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: 10px;
      }
      
      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
      
      & > span {
        background-color: #333333;
        color: #ffffff;
        padding: 5px 10px;
        display: inline-block;
        border-radius: 5px;
        transition: all 0.3s;
        margin-right: 10px;
      }
      
      & > a {
        background-color: #33333330;
        color: #555555;
        padding: 5px 10px;
        margin-right: 5px;
        margin-bottom: 3px;
        border-radius: 5px;
        display: inline-block;
        transition: all 0.3s;
        
        &:before {
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
          margin-right: 5px;
        }
        
        &.post-info-tag:before {
          content: '\\f02b';
        }
        
        &.post-info-category:before {
          content: '\\f07c';
        }
        
        &.post-info-keyword:before {
          content: '\\f1fc';
        }
        
        &:hover {
          color: #ffffff;
          background-color: #333333;
          transition: all 0.3s;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > h1 {font-size: ${size[4]};}
      & > p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > h1 {font-size: ${size[5]};}
      & > p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > h1 {font-size: ${size[6]};}
      & > p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div css={postInfoStyle}>
        <h1><span>{title}</span></h1>
        {
          type === 'post'
            ?
            <p><span>분류</span>일반 포스트</p>
            :
            type === 'notice'
              ?
              <p><span>분류</span>공지 포스트</p>
              :
              <p><span>분류</span>일러스트 포스트</p>
        }
        <p><span>작성일</span>{getUTC9(createdAt)}</p>
        {
          createdAt < updatedAt
            ? <p><span>수정일</span>{getUTC9(updatedAt)}</p>
            :
            ''
        }
        {
          type === 'post'
            ?
            (
              <>
                <p>
                  <span>카테고리</span>
                  {
                    categories.map((category, index) => (
                      <Link key={index + '-category-' + category} passHref href={`/categories/${category}`}>
                        <a className={'post-info-category'}>{category}</a>
                      </Link>
                    ))
                  }
                </p>
                <p>
                  <span>태그</span>
                  {
                    tags.map((tag, index) => (
                      <Link key={index + '-tag-' + tag} passHref href={`/tags/${tag}`}>
                        <a className={'post-info-tag'}>{tag}</a>
                      </Link>
                    ))
                  }
                </p>
              </>
            )
            :
            ''
        }
        {
          type === 'illust'
            ?
            (
              <p>
                <span>키워드</span>
                {
                  keywords.map((keyword, index) => (
                    <Link key={index + '-keyword-' + keyword} passHref href={`/illust/keywords/${keyword}`}>
                      <a className={'post-info-keyword'}>{keyword}</a>
                    </Link>
                  ))
                }
              </p>
            )
            :
            ''
        }
      </div>
    </>
  );
};

PostInfo.propTypes = {
  type: PropTypes.string,
  frontMatter: PropTypes.object,
  top: PropTypes.string,
  bottom: PropTypes.string,
};