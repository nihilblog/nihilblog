import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Strong = ({ children, }: Props) => {
  const style = css`
    font-weight: 900;
    color: #ff5b5b;

    & > a {
      font-weight: 900;
    }
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};
