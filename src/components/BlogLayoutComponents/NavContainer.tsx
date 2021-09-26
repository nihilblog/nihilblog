import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import { ActiveLink } from './ActiveLink';

export const NavContainer = () => {
  const navStyle = css`
    padding: 13px 10px;
    background-color: #333333;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -1px;

    & > a {
      box-sizing: border-box;
      display: inline-block;
      color: #dddddd;
      background-color: #444444;
      border-radius: 10px;
      padding: 10px;
      margin: 2px 4px;
      line-height: 100%;

      &:nth-of-type(1) {
        margin-left: 0;
      }

      &:nth-last-of-type(1) {
        margin-right: 0;
      }

      &:hover,
      &.selected {
        color: #333333;
        background-color: #ffffff;
      }

      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      &:nth-of-type(1):before {content: '\\f015';}
      &:nth-of-type(2):before {content: '\\f05a';}
      &:nth-of-type(3):before {content: '\\f0f3';}
      &:nth-of-type(4):before {content: '\\f039';}
      &:nth-of-type(5):before {content: '\\f07b';}
      &:nth-of-type(6):before {content: '\\f02c';}
      &:nth-of-type(7):before {content: '\\f53f';}
      &:nth-of-type(8):before {content: '\\f187';}
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

  return (
    <>
      <nav id='blog-main-menu' css={navStyle}>
        <ActiveLink href='/'>홈</ActiveLink>
        <ActiveLink href='/about'>소개</ActiveLink>
        <ActiveLink href='/notice/page/1' type='notice'>공지</ActiveLink>
        <ActiveLink href='/post/page/1' type='post'>포스트</ActiveLink>
        <ActiveLink href='/categories' type='categories'>카테고리</ActiveLink>
        <ActiveLink href='/tags' type='tags'>태그</ActiveLink>
        <ActiveLink href='/illust/page/1' type='illust'>일러스트</ActiveLink>
        {
          process.env.NODE_ENV === 'development'
            ? (
              <ActiveLink href='/view/page/1'>포스트 리스트</ActiveLink>
            )
            : (
              <ActiveLink href='/archive'>아카이브</ActiveLink>
            )
        }
      </nav>
    </>
  );
};
