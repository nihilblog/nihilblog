import React from 'react';
import { css } from '@emotion/react';

const DottedLine = ({ top = 60, bottom = 60, }) => {
  const lineStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    border: none;
    border-bottom: 3px dotted #888888;
  `;

  return (
    <>
      <hr css={lineStyle} />
    </>
  );
};

export default DottedLine;