import React from 'react';
import { css } from '@emotion/react';
import config from '@/data/config.data';
import size from '@/data/size.data';

export const FooterContainer = () => {
  const footerContainerStyle = css`
    background-color: #333333;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    letter-spacing: -1px;
    user-select: none;

    & > #footer-link {
      margin-bottom: 10px;
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

        &:nth-of-type(4):before {
          content: '\\f015';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
        }
      }
    }

    & > #footer-blog-version {
      color: #ffffff;
      font-weight: 500;
      margin-bottom: 5px;

      & > strong {
        color: inherit;
        font-weight: 900;
      }
    }

    & > #footer-copyright {
      color: #ffffff;
      font-weight: 900;

      &:before {
        content: '\\f1f9';
        margin-right: 5px;
        font-weight: 500;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > #footer-copyright,
      & > #footer-blog-version {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > #footer-copyright,
      & > #footer-blog-version {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & > #footer-copyright,
      & > #footer-blog-version {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <footer css={footerContainerStyle}>
        <p id='footer-link'>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener' aria-label='email' />
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener' aria-label='instagram' />
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener' aria-label='github' />
          <a href='https://nihilncunia.github.io/' target='_blank' rel='noreferrer noopener' aria-label='homepage' />
        </p>
        <p id='footer-blog-version'>니힐로그 <strong>v{config.siteVersion}</strong></p>
        <p id='footer-copyright'>{config.copyrightYear}. {config.siteAuthor}.</p>
      </footer>
    </>
  );
};
