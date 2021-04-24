import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import size from '@/data/size';

const NavContainer = () => {
  const navStyle = css`
    margin-bottom: 100px;
    padding: 8px 10px;
    background-color: #333333;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -1px;

    & > a {
      transition: all 0.3s;
      box-sizing: border-box;
      display: inline-block;
      color: #ffffff;
      background-color: #333333;
      border: 2px solid #ffffff;
      border-radius: 20px;
      padding: 5px 10px;
      box-shadow: 0px 0px 10px -4px #ffffff;
      margin: 2px;

      &:hover {
        transition: all 0.3s;
        color: #333333;
        background-color: #ffffff;
      }

      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
      }

      &:nth-of-type(1):before {content: '\\f6d9';}
      &:nth-of-type(2):before {content: '\\f015';}
      &:nth-of-type(3):before {content: '\\f05a';}
      &:nth-of-type(4):before {content: '\\f0f3';}
      &:nth-of-type(5):before {content: '\\f039';}
      &:nth-of-type(6):before {content: '\\f07b';}
      &:nth-of-type(7):before {content: '\\f02c';}
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
      <header css={navStyle}>
        <Link href='/'><a>프론트</a></Link>
        <Link href='/blog'><a>홈</a></Link>
        <Link href='/about'><a>소개</a></Link>
        <Link href='/blog/notice/page/1'><a>공지</a></Link>
        <Link href='/blog/post/page/1'><a>포스트</a></Link>
        <Link href='/blog/categories/'><a>카테고리</a></Link>
        <Link href='/blog/tags/'><a>태그</a></Link>
      </header>
    </>
  );
};

export default NavContainer;