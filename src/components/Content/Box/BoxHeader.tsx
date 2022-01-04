import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface Props {
  children?: ReactNode;
  i?: string;
  w?: string;
  f?: string;
  top?: string;
  bottom?: string;
}

export const BoxHeader = ({
  children, i, w, f, top = '0', bottom = '20',
}: Props) => {
  const BoxHeaderStyle = css({
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
    backgroundColor: '#333333',
    padding: '10px',
    borderRadius: '10px',
    color: '#ffffff',
    fontWeight: 900,
    letterSpacing: '-1px',
    width: '100%',
    boxSizing: 'border-box',

    '&:before': {
      content: `'\\${i}'`,
      fontWeight: parseInt(w, 10),
      fontFamily: `'Font Awesome 5 ${f}', sans-serif`,
      marginRight: '10px',
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      fontSize: size[4],
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      fontSize: size[5],
    },
    '@media (min-width: 801px)': {
      fontSize: size[6],
    },
  });

  return (
    <>
      <h2 css={BoxHeaderStyle}>{children}</h2>
    </>
  );
};
