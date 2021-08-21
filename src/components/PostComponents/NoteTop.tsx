import React from 'react';
import { css } from '@emotion/react';

interface Props {
  number?: string;
}

export const NoteTop = ({ number, }: Props) => {
  const style = css`
    font-weight: 500;
    margin-right: 2px;

    & > a {
      color: #218cd8;
      font-size: 80%;

      &:before {
        content: '[';
        margin-right: 2px;
      }

      &:after {
        content: ']';
        margin-left: 2px;
      }

      &:hover {
        font-weight: 900;
      }
    }
  `;

  return (
    <>
      <sup id={`top${number}`} css={style}><a href={`#note${number}`}>{number}</a></sup>
    </>
  );
};
