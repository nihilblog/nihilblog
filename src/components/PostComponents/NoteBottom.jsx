import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';

export const NoteBottom = ({ children, link, number, top = 0, bottom = 0, first = false, }) => {
  const anotherStyle = `
    border-top: 3px dotted #888888;
    padding-top: ${top}px;
  `;

  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    ${first && anotherStyle}


    & > #note${number} {
      margin-right: 5px;
      font-weight: 900;
      font-size: 90%;
      
      &:before {
        content: '[';
      }

      &:after {
        content: ']';
      }
    }

    & > .note-body {
      font-size: 90%;
    }

    & > a {
      margin-left: 10px;
      font-size: 90%;
      color: #218cd8;

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
      <p className='post-foot-note' css={style}>
        <span id={`note${number}`}>{number}</span>
        <span className='note-body'>{children}</span>
        <a href={`#top${link}`}>위로</a>
      </p>
    </>
  );
};