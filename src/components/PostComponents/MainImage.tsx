import React from 'react';
import { css } from '@emotion/react';

interface Props {
  src?: string;
  alt?: string;
}

export const MainImage = ({ src, alt, }: Props) => {
  const MainImageStyle = css({
    maxWidth: '940px',
    marginBottom: '80px',

    '& > img': {
      width: '100%',
      display: 'block',
      borderRadius: '10px',
      boxSizing: 'border-box',
      border: '5px solid #333333',
    },
  });

  return (
    <>
      <div id='content-main-image' css={MainImageStyle}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};
