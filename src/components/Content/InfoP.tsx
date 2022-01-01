import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface InfoPProps {
  top?: string;
  bottom?: string;
  children?: React.ReactNode;
}

export const InfoP = ({ top, bottom, children, }: InfoPProps) => {
  const InfoPStyle = css({
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
    letterSpacing: '-1px',
    lineHeight: '1',
    fontWeight: 500,
    textAlign: 'justify',

    '& > span': {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '5px 10px',
      display: 'inline-block',
      borderRadius: '5px',
      marginRight: '10px',
    },

    '& > a': {
      backgroundColor: '#33333330',
      color: '#555555',
      padding: '5px 10px',
      marginRight: '5px',
      marginBottom: '5px',
      borderRadius: '5px',
      display: 'inline-flex',
      flexDirection: 'row',
      lineHeight: '1',
      alignItems: 'center',
      justifyContent: 'center',

      '& > svg': {
        marginRight: '5px',
        fill: '#555555',
      },

      '& > strong': {
        fontWeight: 500,
        color: 'inherit',
      },

      '&:hover': {
        color: '#ffffff',
        backgroundColor: '#333333',

        '& > svg': {
          fill: '#ffffff',
        },
      },
    },

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
    <p css={InfoPStyle}>{children}</p>
  );
};
