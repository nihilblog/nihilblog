import React from 'react';
import { css } from '@emotion/react';

export const Gray = ({ children, }) => {
  const style = css`
    font-style: italic;
    color: #888888;
    margin-right: 4px;
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};