import React from 'react';
import { css } from '@emotion/react';
import BlogConfig from '@/data/blogConfig';
import size from '@/data/size';

const FooterContainer = () => {
  const footerContainerStyle = css`
    background-color: #333333;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    letter-spacing: -1px;
    
    & > #footer-link {
      margin-bottom: 5px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      & > a {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        color: #dddddd;
        border-radius: 25px;
        margin: 2px;
        width: 50px;
        height: 50px;
        font-size: 150%;
        align-items: center;
        justify-content: center;
        background-color: #444444;

        &:hover {
          color: #333333;
          background-color: #ffffff;
        }

        &:nth-of-type(1):before {
          content: '\\f0e0';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
        }

        &:nth-of-type(2):before {
          content: '\\f16d';
          font-weight: 500;
          font-family: 'Font Awesome 5 Brands', sans-serif;
        }

        &:nth-of-type(3):before {
          content: '\\f09b';
          font-weight: 500;
          font-family: 'Font Awesome 5 Brands', sans-serif;
        }
      }
    }

    & > #footer-copyright {
      color: #ffffff;
      font-weight: 900;
      user-select: none;

      &:before {
        content: '\\f1f9';
        margin-right: 5px;
        font-weight: 500;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > #footer-copyright {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > #footer-copyright {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > #footer-copyright {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <footer css={footerContainerStyle}>
        <p id='footer-link'>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener' aria-label='email' />
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener' aria-label='instagram' />
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener' aria-label='github' />
        </p>
        <p id='footer-copyright'>{BlogConfig.year}. {BlogConfig.author}.</p>
      </footer>
    </>
  );
};

export default FooterContainer;
