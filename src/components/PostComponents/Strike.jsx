import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Strike = ({ children, }) => {
  const style = css`
    color: #888888;
  `;

  return (
    <>
      <s css={style}>{children}</s>
    </>
  );
};

Strike.propTypes = {
  children: PropTypes.node,
};
