import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Strong = ({ children, }) => {
  const style = css`
    font-weight: 900;
    color: #ff5b5b;
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};

Strong.propTypes = {
  children: PropTypes.node,
};
