import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Bold = ({ children, }: Props) => {
  const BoldStyle = css`
    font-weight: 900;
  `;

  return (
    <>
      <span css={BoldStyle}>{children}</span>
    </>
  );
};
