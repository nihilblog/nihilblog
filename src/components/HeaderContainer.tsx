import React from 'react';
import { css } from '@emotion/react';
import BlogConfig from '@/data/blogConfig';
import size from '@/data/size';

const HeaderContainer = () => {
  const headerStyle = css`
    padding: 10px;
    border-bottom: 5px solid #ffffff;
    background-color: #333333;
    text-align: center;
    user-select: none;

    & > img {
      width: 250px;
      display: block;
      margin: 0 auto 5px auto;
    }

    & > p {
      color: #ffffff;
      letter-spacing: -1px;
      font-weight: 500;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > p {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > p {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & > p {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <header css={headerStyle}>
        <img src='/images/nihilog-front-logo.svg' alt='니힐로그 로고' />
        <p>{BlogConfig.siteTitle} Ver.{BlogConfig.siteVersion}.</p>
      </header>
    </>
  );
};

export default HeaderContainer;
