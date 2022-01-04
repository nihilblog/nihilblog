import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
}

export const Ol = ({ children, top = '40', bottom = '40', }: Props) => {
  const OlStyle = css({
    margin: `${top}px 0 ${bottom}px 0`,
    padding: '7px 10px 7px 10px',
    listStyleType: 'none',
    counterReset: 'number',
    border: '2px solid #33333330',
    backgroundColor: '#33333310',
    borderRadius: '10px',
    fontWeight: 500,
    color: '#333333',

    '& ol': {
      listStyleType: 'none',
      counterReset: 'number',
      border: 'none',
      backgroundColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      margin: '0 0 0 20px',
    },

    '& li': {
      margin: '3px 0',
      counterIncrement: 'number',
      letterSpacing: '-1px',

      '&:before': {
        content: `counter(number) '.'`,
        marginRight: '5px',
        color: '#ffffff',
        fontWeight: 900,
        padding: '0 7px',
        borderRadius: '5px',
        fontSize: '90%',
      },
    },

    '& > li': {
      '&:before': {
        backgroundColor: '#333333',
      },

      '& > ol > li': {
        '&:before': {
          backgroundColor: '#555555',
        },

        '& > ol li': {
          '&:before': {
            backgroundColor: '#777777',
          },
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& li': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& li': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& li': {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      <ol className='post-ordered-list' css={OlStyle}>{children}</ol>
    </>
  );
};
