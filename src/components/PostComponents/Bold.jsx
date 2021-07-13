import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Bold = ({ children, }) => {
  const style = css`
    font-weight: 900;
  `;

  return (
    <>
      <span css={style}>{children}</span>
    </>
  );
};

Bold.propTypes = {
  children: PropTypes.node,
};