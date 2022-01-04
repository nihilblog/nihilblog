import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
  align?: ('left' | 'right' | 'justify' | 'center');
}

export const P = ({
  children, top = '20', bottom = '20', align = 'justify',
}: Props) => {
  const PStyle = css({
    textAlign: align,
    lineHeight: '1.8',
    margin: `${top}px 0 ${bottom}px 0`,
    textIndent: '10px',
    letterSpacing: '-1px',
    color: '#333333',
    fontWeight: 500,

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
      <p className='post-paragraph' css={PStyle}>{children}</p>
    </>
  );
};
