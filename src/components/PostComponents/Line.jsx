import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Line = ({ margin = '80', }) => {
  const lineStyle = css`
    margin: ${margin}px auto ${margin}px auto;
    width: 80%;
    border: none;
    border-bottom: 10px dotted #888888;
    transition: all 0.3s;
  `;
  
  return (
    <>
      <hr css={lineStyle} />
    </>
  );
};

Line.propTypes = {
  margin: PropTypes.string,
};