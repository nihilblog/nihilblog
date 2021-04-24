import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';

export const Youtube = ({ children, src, top = 40, bottom = 40, }) => {
  const replaceSrc = src.replace('watch?v=', 'embed/');

  const style = css`
    margin: ${top}px 0px 0px 0px;
    padding: 10px;
    border-radius: 10px;
    background-color: #c00c00;

    & > .youtube-block-title {
      text-align: center;
      margin-bottom: 10px;
      font-weight: 900;
      color: #ffffff;
      transition: all 0.3s;
      letter-spacing: -1px;

      &:before {
        content: '\\f167';
        margin-right: 5px;
        font-weight: 500;
        font-family: 'Font Awesome 5 Brands';
      }
    }

    & > .video-wrapper {
      position: relative;
      height: 0px;
      padding-bottom: 56.25%;
      box-sizing: border-box;
      border-radius: 10px;
      transition: all 0.3s;

      & > iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  `;

  const youtubeDesc = css`
    letter-spacing: -1px;
    color: #333333;
    margin-top: 5px;
    text-align: center;
    font-style: italic;
    margin: 5px 0px ${bottom}px 0px;

    & > span {
      font-size: 90%;
    }

    &:before {
      content: '\\f167';
      margin-right: 5px;
      font-weight: 500;
      font-family: 'Font Awesome 5 Brands';
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .youtube-block-desc,
      .post-youtube-block-desc,
      .post-youtube-block p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .youtube-block-desc,
      .post-youtube-block-desc,
      .post-youtube-block p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      .youtube-block-desc,
      .post-youtube-block-desc,
      .post-youtube-block p {font-size: ${size[3]};}
    }
  `;
  return (
    <>
      <Global styles={fontSize} />
      <div className='post-youtube-block' css={style}>
        <p className='youtube-block-title'>YouTube 영상</p>
        <div className='video-wrapper'>
          <iframe id='video' src={replaceSrc} frameBorder='0' allow='encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        </div>
      </div>
      <p className='post-youtube-block-desc' css={youtubeDesc}>
        <span>{children}</span>
      </p>
    </>
  );
};