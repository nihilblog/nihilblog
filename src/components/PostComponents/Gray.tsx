import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Gray = ({ children, }: Props) => {
  const GrayStyle = css({
    fontStyle: 'italic',
    color: '#888888',
    marginRight: '4px',
  });

  return (
    <>
      <span css={GrayStyle}>{children}</span>
    </>
  );
};
