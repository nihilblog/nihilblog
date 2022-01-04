import React from 'react';
import { css } from '@emotion/react';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css`
    padding: 20px 10px;
    border-bottom: 5px solid #ffffff;
    background-color: #333333;
    text-align: center;
    user-select: none;

    & > img {
      width: 250px;
      display: block;
      margin: 0 auto;
    }
  `;

  return (
    <>
      <header css={HeaderBlockStyle}>
        <img src='/images/nihilog-front-logo.svg' alt='니힐로그 로고' />
      </header>
    </>
  );
};
