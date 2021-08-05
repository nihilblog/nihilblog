import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

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

PageContainer.propTypes = {
  children: PropTypes.node,
};
