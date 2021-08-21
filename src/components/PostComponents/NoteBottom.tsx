import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';
import { Line } from '@/components/PostComponents';

interface Props {
  children?: React.ReactNode;
  number?: string;
  first?: ('true' | 'false');
}

export const NoteBottom = ({ children, number, first = 'false', }: Props) => {
  const style = css`
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    line-height: 1.6;

    & > a {
      color: #218cd8;
      margin-right: 10px;
      font-size: 90%;

      &:hover {
        font-weight: 900;
      }

      &:before {
        content: '[';
        margin-right: 2px;
      }

      &:after {
        content: ']';
        margin-left: 2px;
      }

      & > span {
        color: #218cd8;
      }
    }

    & > span {
      font-size: 90%;
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .post-foot-note {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .post-foot-note {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      .post-foot-note {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      {
        first === 'true'
          ? <Line />
          : ''
      }
      <p className='post-foot-note' css={style}>
        <a id={`note${number}`} href={`#top${number}`}><span>{number}</span></a>
        <span className='note-body'>{children}</span>
      </p>
    </>
  );
};
