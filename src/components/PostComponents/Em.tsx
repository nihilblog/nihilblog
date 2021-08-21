import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Em = ({ children, }: Props) => {
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
