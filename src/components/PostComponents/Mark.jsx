import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Mark = ({ children, }) => {
  const markStyle = css`
    background-color: #ff5b5b40;
    padding: 0 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
  `;

  return (
    <>
      <mark css={markStyle}>{children}</mark>
    </>
  );
};

Mark.propTypes = {
  children: PropTypes.node,
};
