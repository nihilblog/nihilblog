import React from 'react';
import { css } from '@emotion/react';

interface Props {
  number: string;
}

export const NoteTop = ({ number, }: Props) => {
  const NoteTopStyle = css({
    fontWeight: 500,
    marginRight: '2px',

    '& > a': {
      color: '#218cd8',
      fontSize: '80%',

      '&:before': {
        content: `'['`,
        marginRight: '2px',
      },

      '&:after': {
        content: `']'`,
        marginLeft: '2px',
      },

      '&:hover': {
        fontWeight: 900,
      },
    },
  });

  return (
    <>
      <sup id={`top${number}`} css={NoteTopStyle}>
        <a href={`#note${number}`}>{number}</a>
      </sup>
    </>
  );
};
