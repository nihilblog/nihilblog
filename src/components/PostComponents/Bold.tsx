import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Bold = ({ children, }: Props) => {
  const style = css`
    font-weight: 900;
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};
