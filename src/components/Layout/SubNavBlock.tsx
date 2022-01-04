import React from 'react';
import { css } from '@emotion/react';
import { FaPaintBrush } from 'react-icons/fa';
import { size } from '@/data';
import { LinkBlock } from './LinkBlock';

export const SubNavBlock = () => {
  const SubNavBlockStyle = css`
    padding: 8px 10px;
    background-color: #444444;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: -1px;

    & > a {
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #dddddd;
      background-color: #555555;
      border-radius: 10px;
      padding: 10px;
      margin: 2px;
      line-height: 1;

      & > svg {
        fill: #dddddd;
        margin-right: 5px;
      }

      &:hover,
      &.selected {
        color: #333333;
        background-color: #ffffff;

        & > svg {
          fill: #333333;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > a {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > a {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & > a {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <nav id='blog-sub-menu' css={SubNavBlockStyle}>
        <LinkBlock href='/illust/keywords' type='keywords'><FaPaintBrush />키워드</LinkBlock>
      </nav>
    </>
  );
};
