import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: ReactNode;
}

export const MainBlock = ({ children, }: Props) => {
  const MainBlockStyle = css`
    padding: 0 20px;
  `;

  return (
    <>
      <main css={MainBlockStyle}>
        {children}
      </main>
    </>
  );
};
