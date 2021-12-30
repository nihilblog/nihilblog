import React from 'react';
import { css } from '@emotion/react';
import {
  FaEnvelope, FaGithub, FaHome, FaInstagram, FaRegCopyright
} from 'react-icons/fa';
import config from '@/data/config.data';
import size from '@/data/size.data';

export const FooterBlock = React.memo(() => {
  const FooterBlockStyle = css({
    backgroundColor: '#333333',
    padding: '10px',
    textAlign: 'center',
    boxSizing: 'border-box',
    letterSpacing: '-1px',
    userSelect: 'none',

    '& > #footer-link': {
      marginBottom: '10px',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',

      '& > a': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#dddddd',
        borderRadius: '25px',
        margin: '2px',
        width: '50px',
        height: '50px',
        fontSize: '150%',
        backgroundColor: '#444444',
        lineHeight: '1',

        '& > svg': {
          fill: '#dddddd',
        },

        '&:hover': {
          color: '#333333',
          backgroundColor: '#ffffff',

          '& > svg': {
            fill: '#333333',
          },
        },
      },
    },

    '& > #footer-blog-version': {
      color: '#ffffff',
      fontWeight: 500,
      marginBottom: '5px',

      '& > strong': {
        color: 'inherit',
        fontWeight: 900,
      },
    },

    '& > #footer-copyright': {
      color: '#ffffff',
      fontWeight: 900,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      '& > svg': {
        marginRight: '5px',
        fill: '#ffffff',
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      [`
        & > #footer-copyright,
        & > #footer-blog-version
      `]: {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      [`
        & > #footer-copyright,
        & > #footer-blog-version
      `]: {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      [`
        & > #footer-copyright,
        & > #footer-blog-version
      `]: {
        fontSize: size[3],
      },
    },
  });

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
        <p id='footer-copyright'><FaRegCopyright className='icon' />{config.copyrightYear}. {config.siteAuthor}.</p>
      </footer>
    </>
  );
});

FooterBlock.displayName = 'FooterBlock';
