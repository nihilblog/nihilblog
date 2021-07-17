import React from 'react';
import { css } from '@emotion/react';
import Adsense  from 'react-adsense';
import PropTypes from 'prop-types';

export const GoogleAd = ({ margin = '40', pos = '', }) => {
  const positionSlot = {
    'top': '7775831240',
    'bottom': '6837513463',
  };
  
  const adStyle = css`
    margin: ${margin}px 0;
  `;
  
  return (
    <>
      <div className={`blog-${pos}-ad`} css={adStyle}>
        <Adsense.Google
          client={'ca-pub-9256396675875954'}
          slot={positionSlot[pos]}
        />
      </div>
    </>
  );
};

GoogleAd.propTypes = {
  margin: PropTypes.string,
  pos: PropTypes.string,
};