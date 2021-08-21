import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Code = ({ children, }: Props) => {
  const style = css`
    padding: 0 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    color: #eeeeee;
    font-size: 90%;
    background-color: #555555;
    margin: 0 2px;
    vertical-align: bottom;

    &:before {
      content: '\\f121';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 5px;
      color: #999999;
    }
  `;

  return (
    <>
      <code css={style}>{children}</code>
    </>
  );
};
