import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface IDd {
  children: React.ReactNode;
}

export const Dd = ({ children, }: IDd) => {
  const DdStyle = css({
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '0 0 10px 10px',
    backgroundColor: '#ffffff',
    border: '2px solid #555555',
    borderTop: 'none',
    color: '#333333',
    textAlign: 'justify',
    fontWeight: 500,
    lineHeight: '1.5',

    '@media (min-width: 1px) and (max-width: 600px)': {
      fontSize: size[1],
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      fontSize: size[2],
    },
    '@media (min-width: 801px)': {
      fontSize: size[3],
    },
  });

  return (
    <>
      <dd css={DdStyle}>
        {children}
      </dd>
    </>
  );
};
