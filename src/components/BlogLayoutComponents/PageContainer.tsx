import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: ReactNode;
}

export const PageContainer = ({ children, }: Props) => {
  const PageContainerStyle = css`
    padding: 0 20px;
  `;

  return (
    <>
      <main css={PageContainerStyle}>
        {children}
      </main>
    </>
  );
};
