import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Mark = ({ children, }: Props) => {
  const MarkStyle = css({
    backgroundColor: '#ff5b5b20',
    color: '#ff5b5b',
    padding: '4px 7px',
    borderRadius: '5px',
    fontSize: '90%',
    margin: '0 2px',
  });

  return (
    <>
      <mark css={MarkStyle}>{children}</mark>
    </>
  );
};
