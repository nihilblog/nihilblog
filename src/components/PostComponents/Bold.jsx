import React from 'react';
import { css } from '@emotion/react';

export const Bold = ({ children, }) => {
  const style = css`
    font-weight: 900;
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};