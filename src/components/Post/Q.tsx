import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Q = ({ children, }: Props) => {
  const QStyle = css`
    padding: 2px 7px;
    background: #eeeeee;
    border-radius: 5px;
    color: #333333;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
    box-sizing: border-box;

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
      <q css={QStyle}>{children}</q>
    </>
  );
};
