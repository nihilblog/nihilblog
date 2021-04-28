import React from 'react';
import { css } from '@emotion/react';

export const Q = ({ children, }) => {
  const style = css`
    padding: 0 5px;
    background: #eeeeee;
    border: 2px solid #33333350;
    border-radius: 5px;
    color: #333333;
    font-size: 90%;
    margin: 0 2px;
    transition: all 0.3s;

    & > .fa-quote-left,
    & > .fa-quote-right {
      text-indent: 0;
    }

    &:before {
      content: '\\f10d';
      margin-right: 5px;
      font-weight: 900;
       font-family: 'Font Awesome 5 Free', sans-serif;
    }

    &:after {
      content: '\\f10e';
      margin-left: 5px;
      font-weight: 900;
       font-family: 'Font Awesome 5 Free', sans-serif;
    }
  `;

  return (
    <>
      <q css={style}>{children}</q>
    </>
  );
};