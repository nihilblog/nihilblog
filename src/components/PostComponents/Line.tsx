import React from 'react';
import { css } from '@emotion/react';

interface Props {
  margin?: string;
}

export const Line = ({ margin = '80', }: Props) => {
  const lineStyle = css`
    margin: ${margin}px auto ${margin}px auto;
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
