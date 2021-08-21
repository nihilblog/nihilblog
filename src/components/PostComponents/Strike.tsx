import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Strike = ({ children, }: Props) => {
  const style = css`
    color: #888888;
  `;

  return (
    <>
      <s css={style}>{children}</s>
    </>
  );
};
