import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';
import { ActiveLink } from './ActiveLink';

export const SubNavContainer = () => {
  const subNavStyle = css`
    padding: 8px 10px;
    background-color: #444444;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -1px;

    & > a {
      box-sizing: border-box;
      display: inline-block;
      color: #dddddd;
      background-color: #555555;
      border-radius: 10px;
      padding: 10px;
      margin: 2px;
      line-height: 100%;

      &:hover,
      &.selected {
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
      <nav id='blog-sub-menu' css={subNavStyle}>
        <ActiveLink href='/illust/keywords' type='keywords'>키워드</ActiveLink>
      </nav>
    </>
  );
};
