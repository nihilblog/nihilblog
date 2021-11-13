import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size.data';
import { Line } from '@/components/PostComponents';

interface Props {
  children?: React.ReactNode;
  number?: string;
  first?: boolean;
}

export const NoteBottom = ({ children, number, first = false, }: Props) => {
  const style = css`
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    line-height: 1.6;
    margin-top: 5px;
    margin-bottom: 5px;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

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

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
    }

    @media (min-width: 801px) {
      font-size: ${size[3]};
    }
  `;

  return (
    <>
      {first && <Line />}
      <p className='post-foot-note' css={style}>
        <a id={`note${number}`} href={`#top${number}`}><span>{number}</span></a>
        <span className='note-body'>{children}</span>
      </p>
    </>
  );
};
