import React from 'react';
import { css } from '@emotion/react';

export const Strong = ({ children, }) => {
  const style = css`
    font-weight: 900;
    color: #ff5b5b;
    transition: all 0.3s;
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};