import React from 'react';
import { css } from '@emotion/react';

export const Kbd = ({ children, }) => {
  const style = css`
    padding: 0px 5px;
    border: 2px solid #3f91ff;
    color: #3f91ff;
    background-color: #c8e0ff90;
    border-radius: 5px;
    font-weight: 900;
    font-size: 90%;
    margin: 0px 2px;

    &:before {
      content: '\\f11c';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <kbd css={style}>{children}</kbd>
    </>
  );
};