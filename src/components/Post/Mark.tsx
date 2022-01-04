import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Mark = ({ children, }: Props) => {
  const MarkStyle = css`
    background-color: #ff5b5b20;
    color: #ff5b5b;
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
  `;

  return (
    <>
      <mark css={MarkStyle}>{children}</mark>
    </>
  );
};
