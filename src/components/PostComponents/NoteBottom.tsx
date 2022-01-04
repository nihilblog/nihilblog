import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';
import { Line } from '@/components/PostComponents';

interface Props {
  children: React.ReactNode;
  number: string;
  first?: boolean;
}

export const NoteBottom = ({ children, number, first = false, }: Props) => {
  const NoteBottomStyle = css({
    color: '#333333',
    letterSpacing: '-1px',
    fontWeight: 500,
    lineHeight: '1.6',
    marginTop: '5px',
    marginBottom: '5px',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '& > a': {
      color: '#218cd8',
      marginRight: '10px',
      fontSize: '90%',

      '&:hover': {
        fontWeight: 900,
      },

      '&:before': {
        content: `'['`,
        marginRight: '2px',
      },

      '&:after': {
        content: `']'`,
        marginLeft: '2px',
      },

      '& > span': {
        color: '#218cd8',
      },
    },

    '& > span': {
      fontSize: '90%',
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
    <>
      {first && <Line />}
      <p className='post-foot-note' css={NoteBottomStyle}>
        <a id={`note${number}`} href={`#top${number}`}><span>{number}</span></a>
        <span className='note-body'>{children}</span>
      </p>
    </>
  );
};
