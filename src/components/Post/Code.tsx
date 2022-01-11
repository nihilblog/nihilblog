import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Code = ({ children, }: Props) => {
  const CodeStyle = css`
    padding: 2px 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    color: #ffffff;
    font-size: 90%;
    background-color: #555555;
    margin: 0 2px;
    line-height: 1;

    &:before {
      content: '\\f121';
      font-family: 'Font Awesome 5 Free', sans-serif;
      font-weight: 900;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <code css={CodeStyle}>{children}</code>
    </>
  );
};
