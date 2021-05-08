import React from 'react';
import { css } from '@emotion/react';

export const Mark = ({ children, }) => {
  const markStyle = css`
    background-color: #ff5b5b40;
    padding: 0 5px;
    border-radius: 5px;
  `;
  
  return (
    <>
      <mark css={markStyle}>{children}</mark>
    </>
  );
};