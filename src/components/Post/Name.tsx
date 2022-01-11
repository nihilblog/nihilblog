import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Name = ({ children, }: Props) => {
  const NameStyle = css`
    padding: 2px 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
    color: #ffffff;
    background-color: #555555;

    &:before {
      content: '\\f1c9';
      font-family: 'Font Awesome 5 Free', sans-serif;
      font-weight: 900;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <span css={NameStyle}>{children}</span>
    </>
  );
};
