import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const Image = ({ src, alt, top = 40, bottom = 40, }) => {
  const style = css`
    max-width: 940px;
    box-sizing: border-box;
    margin: ${top}px auto ${bottom}px auto;
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;
    display: table;
    position: relative;

    & > a {
      background-color: #bbbbbb;
      border-radius: 10px;
      color: #555555;
      transition: all 0.3s;
      padding: 5px 10px;
      margin-top: 10px;
      display: block;
      text-align: center;
      font-size: 120%;
      font-weight: 500;
      
      &:before {
        content: '\\f065';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
      }

      &:hover {
        background-color: #ffffff;
        color: #333333;
        transition: all 0.3s;
      }
    }

    & > img {
      margin: 0px auto;
      max-width: 100%;
      border-radius: 10px;
      display: block;
      transition: all 0.3s;
    }

    & > figcaption {
      margin-top: 10px;
      text-align: center;
      font-style: italic;
      color: #aaaaaa;
      letter-spacing: -1px;
      transition: all 0.3s;

      & > span {
        font-size: 90%;
        color: inherit;
      }

      &:before {
        content: '\\f03e';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      figcaption {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      figcaption {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      figcaption {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <figure className='post-image-block' css={style}>
        <img src={src} alt={alt} />
        <a href={src} target='_blank' rel='noreferrer noopener'>크게 보기 (새 창)</a>
        <figcaption>
          <span>{alt}</span>
        </figcaption>
      </figure>
    </>
  );
};