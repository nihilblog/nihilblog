import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import ActiveLink from '@/components/ActiveLink';
import ActivePostPageLink from '@/components/ActivePostPageLink';
import ActiveNoticePageLink from '@/components/ActiveNoticePageLink';

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
      box-shadow: 0 0 10px -4px #ffffff;
      margin: 2px;

      &:hover,
      &.selected {
        transition: all 0.3s;
        color: #333333;
        background-color: #ffffff;
      }

      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
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
      <nav css={navStyle}>
        <ActiveLink href='/'><a>프론트</a></ActiveLink>
        <ActiveLink href='/blog'><a>홈</a></ActiveLink>
        <ActiveLink href='/about'><a>소개</a></ActiveLink>
        <ActiveNoticePageLink href='/blog/notice/page/1'><a>공지</a></ActiveNoticePageLink>
        <ActivePostPageLink href='/blog/post/page/1'><a>포스트</a></ActivePostPageLink>
        <ActiveLink href='/blog/categories'><a>카테고리</a></ActiveLink>
        <ActiveLink href='/blog/tags'><a>태그</a></ActiveLink>
      </nav>
    </>
  );
};

export default NavContainer;