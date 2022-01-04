import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Em = ({ children, }: Props) => {
  const EmStyle = css({
    marginRight: '4px',
    color: 'inherit',
    fontWeight: 'inherit',
  });

  return (
    <>
      <em css={EmStyle}>{children}</em>
    </>
  );
};
