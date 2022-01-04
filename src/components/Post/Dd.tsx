import React from 'react';
import { css } from '@emotion/react';
import { size } from '@/data';

interface IDd {
  children: React.ReactNode;
}

export const Dd = ({ children, }: IDd) => {
  const DdStyle = css`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    border: 2px solid #555555;
    border-top: none;
    color: #333333;
    text-align: justify;
    font-weight: 500;
    line-height: 1.5;

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
      <dd css={DdStyle}>
        {children}
      </dd>
    </>
  );
};
