import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

interface Props {
  margin?: string;
  pos?: ('top' | 'bottom');
  type: ('list' | 'post');
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: {[key: string]: unknown}[];
  }
}

export const GoogleAd = ({ margin = '100', pos, type, }: Props) => {
  const [ backgroundColor, setBackgroundColor, ] = useState('');
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

  useEffect(() => {
    if (type === 'post') {
      setBackgroundColor('#eeeeee');
    } else if (type === 'list') {
      setBackgroundColor('#bbbbbb');
    }
  }, []);

  const adStyle = css`
    margin: ${margin}px 0;
    background-color: ${backgroundColor};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <div className={`blog-${pos}-ad`} css={adStyle} key={`${asPath}-${pos}`}>
        <ins
          className='adsbygoogle'
          style={{ display: 'block', }}
          data-ad-client='ca-pub-9256396675875954'
          data-ad-slot={positionSlot[pos]}
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      </div>
    </>
  );
};
