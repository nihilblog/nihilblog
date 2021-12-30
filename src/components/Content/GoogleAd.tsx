import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

interface Props {
  margin?: string;
  pos?: ('top' | 'bottom');
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: {[key: string]: unknown}[];
  }
}

export const GoogleAd = ({ margin = '100', pos, }: Props) => {
  const { asPath, } = useRouter();

  const positionSlot = {
    top: '7775831240',
    bottom: '6837513463',
  };

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, [ asPath, ]);

  const GoogleAdStyle = css({
    margin: `${margin}px 0`,

    '& > .sizing': {
      minHeight: '100px',
      maxHeight: '280px',
    },
  });

  return (
    <>
      <div className={`blog-${pos}-ad`} css={GoogleAdStyle} key={`${asPath}-${pos}`}>
        <ins
          className='adsbygoogle sizing'
          style={{ display: 'block', }}
          data-ad-client='ca-pub-9256396675875954'
          data-ad-slot={positionSlot[pos]}
          data-ad-format='auto'
          data-language='ko'
          data-full-width-responsive='true'
        />
      </div>
    </>
  );
};
