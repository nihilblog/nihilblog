import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';

export const NoteBottom = ({ children, link, number, top = 0, bottom = 0, first = 'false', }) => {
  const anotherStyle = `
    border-top: 3px dotted #888888;
    padding-top: ${top}px;
  `;

  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    line-height: 1.4;
    ${first === 'true' && anotherStyle}
    
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
      <p className='post-foot-note' css={style}>
        <a id={`note${number}`} href={`#top${link}`}><span>{number}</span></a>
        <span className='note-body'>{children}</span>
      </p>
    </>
  );
};