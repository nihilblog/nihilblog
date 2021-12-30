import React from 'react';
import { css } from '@emotion/react';

export const HeaderBlock = () => {
  const HeaderBlockStyle = css({
    padding: '20px 10px',
    borderBottom: '5px solid #ffffff',
    backgroundColor: '#333333',
    textAlign: 'center',
    userSelect: 'none',

    '& > img': {
      width: '250px',
      display: 'block',
      margin: '0 auto',
    },
  });

  return (
    <>
      <header css={HeaderBlockStyle}>
        <img src='/images/nihilog-front-logo.svg' alt='니힐로그 로고' />
      </header>
    </>
  );
};
