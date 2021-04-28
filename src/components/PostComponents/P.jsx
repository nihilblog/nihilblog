import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const P = ({ children, top = 20, bottom = 20, align = 'justify', }) => {
  const style = css`
    text-align: ${align};
    line-height: 1.8;
    margin: ${top}px 0 ${bottom}px 0;
    text-indent: 10px;
    letter-spacing: -1px;
    color: #333333;
    font-weight: 500;
    transition: all 0.3s;

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
    }

    @media (min-width: 801px) {
      font-size: ${size[3]};
    }
  `;
  return (
    <>
      <p className='post-paragraph' css={style}>{children}</p>
    </>
  );
};