import React from 'react';
import { css } from '@emotion/react';
import BlogConfig from '@/data/blog.config';
import size from '@/data/size';

const HeaderContainer = () => {
  const headerStyle = css`
    padding: 10px;
    border-bottom: 2px dotted #ffffff50;
    background-color: #333333;
    text-align: center;

    & > h1 {
      & > img {
        width: 250px;
        margin-bottom: 5px;
        display: block;
        transition: all 0.3s;
        margin: 0px auto;
      }
    }

    & > p {
      color: #ffffff;
      letter-spacing: -1px;
      font-weight: 500;
      transition: all 0.3s;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > p {font-size: ${size[3]};}
    }
  `;

  // const fontSize = css`
    
  // `;

  return (
    <>
      <header css={headerStyle}>
        <h1>
          <img src='/images/blog-logo.svg' alt='니힐 블로그 로고' />
        </h1>
        <p>{BlogConfig.title} Ver.{BlogConfig.version}.</p>
      </header>
    </>
  );
};

export default HeaderContainer;