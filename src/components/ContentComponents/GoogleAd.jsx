import React from 'react';
import { css } from '@emotion/react';
import Adsense  from 'react-adsense';

const GoogleAd = ({ margin = '40', slot, top = 'false', }) => {
  const layoutClass = {
    'false': 'bottom',
    'true': 'top',
  };
  
  const adStyle = css`
    margin: ${margin}px 0;
  `;
  
  return (
    <>
      <div className={`blog-${layoutClass[top]}-ad`} css={adStyle}>
        <Adsense.Google
          client={'ca-pub-9256396675875954'}
          slot={slot}
        />
      </div>
    </>
  );
};

export default GoogleAd;