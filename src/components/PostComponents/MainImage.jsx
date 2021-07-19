import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const MainImage = ({ src, alt, }) => {
  const style = css`
    max-width: 940px;
    margin-bottom: 80px;

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
        <img src={`/images/thumbnail/${src}.png`} alt={alt} />
      </div>
    </>
  );
};

MainImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};