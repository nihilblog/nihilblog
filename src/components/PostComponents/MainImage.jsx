import React from 'react';
import { css } from '@emotion/react';

export const MainImage = ({ src, alt, }) => {
  const style = css`
    max-width: 940px;
    margin-bottom: 20px;

    & > img {
      width: 100%;
      display: block;
      border-radius: 10px;
      box-sizing: border-box;
      border: 5px solid #333333;
    }
  `;

  return (
    <>
      <div id='content-main-image' css={style}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};