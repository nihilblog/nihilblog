import React from 'react';
import { css } from '@emotion/react';
import {
  FaEnvelope, FaGithub, FaHome, FaInstagram, FaRegCopyright
} from 'react-icons/fa';
import { config, size } from '@/data';

export const FooterBlock = React.memo(() => {
  const year = new Date().getFullYear();
  const copyYear = config.copyrightYear < year ? `${config.copyrightYear}-${year}` : config.copyrightYear;

  const FooterBlockStyle = css`
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
        align-items: center;
        justify-content: center;
        color: #dddddd;
        border-radius: 25px;
        margin: 2px;
        width: 50px;
        height: 50px;
        font-size: 150%;
        background-color: #444444;
        line-height: 1;

        & > svg {
          fill: #dddddd;
        }

        &:hover {
          color: #333333;
          background-color: #ffffff;

          & > svg {
            fill: #333333;
          }
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > svg {
        margin-right: 5px;
        fill: #ffffff;
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
      <footer css={FooterBlockStyle}>
        <p id='footer-link'>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener' aria-label='email'>
            <FaEnvelope />
          </a>
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener' aria-label='instagram'>
            <FaInstagram />
          </a>
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener' aria-label='github'>
            <FaGithub />
          </a>
          <a href='https://nihilncunia.github.io/' target='_blank' rel='noreferrer noopener' aria-label='homepage'>
            <FaHome />
          </a>
        </p>
        <p id='footer-blog-version'>니힐로그 <strong>v{config.siteVersion}</strong></p>
        <p id='footer-copyright'><FaRegCopyright className='icon' />{copyYear}. {config.siteAuthor}.</p>
      </footer>
    </>
  );
});

FooterBlock.displayName = 'FooterBlock';
