import React from 'react';
import { css } from '@emotion/react';

const DottedLine = ({ top = 80, bottom = 80, }) => {
  const lineStyle = css`
    margin: ${top}px auto ${bottom}px auto;
    width: 80%;
    border: none;
    border-bottom: 10px dotted #888888;
  `;

  return (
    <>
      <hr css={lineStyle} />
    </>
  );
};

export default DottedLine;