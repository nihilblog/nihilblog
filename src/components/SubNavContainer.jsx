import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import ActiveIllustKeywordPageLink from '@/components/ActiveIllustKeywordPageLink';

const SubNavContainer = () => {
  const subNavStyle = css`
    padding: 8px 10px;
    background-color: #333333;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -1px;
    border-top: 2px dotted #ffffff50;

    & > a {
      transition: all 0.3s;
      box-sizing: border-box;
      display: inline-block;
      color: #ffffff;
      background-color: #333333;
      border: 2px solid #ffffff;
      border-radius: 20px;
      padding: 10px;
      box-shadow: 0 0 10px -4px #ffffff;
      margin: 2px;
      line-height: 100%;

      &:hover,
      &.selected {
        transition: all 0.3s;
        color: #333333;
        background-color: #ffffff;
      }

      &:before {
        content: '\\f1fc';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
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
  
  return (
    <>
      <nav id={'blog-sub-menu'} css={subNavStyle}>
        <ActiveIllustKeywordPageLink href='/blog/illust/keywords'><a>키워드</a></ActiveIllustKeywordPageLink>
      </nav>
    </>
  );
};

export default SubNavContainer;