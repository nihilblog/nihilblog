import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Em = ({ children, }) => {
  const style = css`
    margin-right: 4px;
    color: inherit;
    font-weight: inherit;
  `;
  return (
    <>
      <em css={style}>{children}</em>
    </>
  );
};

Em.propTypes = {
  children: PropTypes.node,
};
