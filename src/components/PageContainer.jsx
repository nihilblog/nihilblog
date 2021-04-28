import React from 'react';
import { css } from '@emotion/react';

const PageContainer = ({ children, }) => {
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

export default PageContainer;