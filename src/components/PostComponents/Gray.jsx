import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Gray = ({ children, }) => {
  const style = css`
    font-style: italic;
    color: #888888;
    margin-right: 4px;
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};

Gray.propTypes = {
  children: PropTypes.node,
};