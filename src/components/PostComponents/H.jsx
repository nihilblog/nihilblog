import size from '@/data/size';
import { css } from '@emotion/react';
import React from 'react';

export const H = ({ children, top = 60, bottom = 60, type = '1', }) => {
  const typePadding = {};

  switch (type) {
    case '1':
      typePadding.topDown = 10;
      typePadding.backColor = '#333333';
      typePadding.spanSize = 100;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '2':
      typePadding.topDown = 8;
      typePadding.backColor = '#555555';
      typePadding.spanSize = 100;
      typePadding.media = [
        size[3],
        size[4],
        size[5],
      ];
      break;
    case '3':
      typePadding.topDown = 6;
      typePadding.backColor = '#777777';
      typePadding.spanSize = 90;
      typePadding.media = [
        size[3],
        size[4],
        size[5],
      ];
      break;
    case '4':
      typePadding.topDown = 4;
      typePadding.backColor = '#999999';
      typePadding.spanSize = 80;
      typePadding.media = [
        size[3],
        size[4],
        size[5],
      ];
      break;
  }

  const style = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    font-weight: 500;
    color: #ffffff;
    background-color: ${typePadding.backColor};
    padding: ${typePadding.topDown}px 10px;
    border-radius: 10px;
    transition: all 0.3s;
    letter-spacing: -1px;

    & > span {
      font-size: ${typePadding.spanSize}%;
      color: inherit;
      transition: all 0.3s;
    }

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 10px;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${typePadding.media[0]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${typePadding.media[1]};
    }

    @media (min-width: 801px) {
      font-size: ${typePadding.media[2]};
    }
  `;

  switch (type) {
    case '1':
      return (
        <>
          <h2 className='post-heading-2' css={style}>
            <span>{children}</span>
          </h2>
        </>
      );
    case '2':
      return (
        <>
          <h3 className='post-heading-3' css={style}>
            <span>{children}</span>
          </h3>
        </>
      );
    case '3':
      return (
        <>
          <h4 className='post-heading-4' css={style}>
            <span>{children}</span>
          </h4>
        </>
      );
    case '4':
      return (
        <>
          <h5 className='post-heading-5' css={style}>
            <span>{children}</span>
          </h5>
        </>
      );
  }
};