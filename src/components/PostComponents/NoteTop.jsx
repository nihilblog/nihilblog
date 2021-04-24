import React from 'react';
import { css } from '@emotion/react';

export const NoteTop = ({ children, link, number, }) => {
  const style = css`
    font-weight: 500;
    margin-right: 3px;
    
    & > a {
      color: #218cd8;
      font-size: 80%;

      &:before {
        content: '[';
      }

      &:after {
        content: ']';
      }

      &:hover {
        font-weight: 900;
      }
    }
  `;

  return (
    <>
      <sup id={`top${number}`} css={style}><a href={`#note${link}`}>{children}</a></sup>
    </>
  );
};