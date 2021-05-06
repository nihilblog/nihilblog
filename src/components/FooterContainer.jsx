import React from 'react';
import { css } from '@emotion/react';
import BlogConfig from '@/data/blog.config';
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
        transition: all 0.3s;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 25px;
        box-shadow: 0 0 10px -4px #ffffff;
        margin: 2px;
        width: 50px;
        height: 50px;
        font-size: 150%;
        align-items: center;
        justify-content: center;

        &:hover {
          transition: all 0.3s;
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
      transition: all 0.3s;

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
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener'/>
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener' />
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener' />
        </p>
        <p id='footer-copyright'>{BlogConfig.year}. {BlogConfig.author}.</p>
      </footer>
    </>
  );
};

export default FooterContainer;