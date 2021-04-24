import React from 'react';
import { css } from '@emotion/react';

export const Em = ({ children, }) => {
  const style = css`
    margin-right: 4px;
    transition: all 0.3s;
    color: inherit;
    font-weight: inherit;
  `;
  return (
    <>
      <em css={style}>{children}</em>
    </>
  );
};