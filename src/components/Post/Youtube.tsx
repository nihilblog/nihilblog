import React from 'react';
import { css, Global } from '@emotion/react';
import { size } from '@/data';

interface Props {
  children?: string;
  top?: string;
  bottom?: string;
  src?: string;
}

export const Youtube = ({
  children, src, top = '40', bottom = '40',
}: Props) => {
  const replaceSrc = src.replace('watch?v=', 'embed/');

  const YoutubeStyle = css`
    margin: ${top}px 0 0 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #c00c00;

    & > .youtube-block-title {
      text-align: center;
      margin-bottom: 10px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -1px;

      &:before {
        content: '\\f167';
        margin-right: 5px;
        font-weight: 500;
        font-family: 'Font Awesome 5 Brands', sans-serif;
      }
    }

    & > .video-wrapper {
      position: relative;
      height: 0;
      padding-bottom: 56.25%;
      box-sizing: border-box;
      border-radius: 10px;

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
    text-align: center;
    font-style: italic;
    margin: 5px 0 ${bottom}px 0;

    & > span {
      font-size: 90%;
    }

    &:before {
      content: '\\f167';
      margin-right: 5px;
      font-weight: 500;
      font-family: 'Font Awesome 5 Brands', sans-serif;
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
      <div className='post-youtube-block' css={YoutubeStyle}>
        <p className='youtube-block-title'>YouTube 영상</p>
        <div className='video-wrapper'>
          <iframe
            title={children}
            id='video'
            src={replaceSrc}
            frameBorder='0'
            allow='encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
      <p className='post-youtube-block-desc' css={youtubeDesc}>
        <span>{children}</span>
      </p>
    </>
  );
};
