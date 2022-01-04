import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface Props {
  children?: ReactNode;
  top?: string;
  bottom?: string;
  idName?: string;
}

export const Box = ({
  children, top = '30', bottom = '30', idName,
}: Props) => {
  const BoxStyle = css({
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px',
    textAlign: 'justify',
    letterSpacing: '-1px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px -4px #333333',
    borderRadius: '10px',

    '& p': {
      '@media (min-width: 1px) and (max-width: 600px)': {
        fontSize: size[1],
      },
      '@media (min-width: 601px) and (max-width: 800px)': {
        fontSize: size[2],
      },
      '@media (min-width: 801px)': {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      {
        idName
          ? (
            <div id={idName} css={BoxStyle}>
              {children}
            </div>
          )
          : (
            <div css={BoxStyle}>
              {children}
            </div>
          )
      }
    </>
  );
};
