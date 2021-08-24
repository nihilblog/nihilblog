import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Name = ({ children, }: Props) => {
  const style = css`
    padding: 0 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    font-size: 90%;
    margin: 0 2px;
    vertical-align: bottom;
    background-color: #888888;
    color: #ffffff;

    &:before {
      content: '\\f1c9';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};
