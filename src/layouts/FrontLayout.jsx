import BlogConfig from '@/data/blog.config';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';

const FrontLayout = ({ children, pageName, pageURL, }) => {
  useEffect(() => {
    document.getElementById('__next').removeAttribute('style');
  }, []);
  
  const FrontGlobalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans KR', sans-serif;
      color: #333333;
      font-weight: 500;
    }

    a {
      text-decoration: none;
    }

    html, body, div#__next, main {
      height: 100% !important;
      width: 100%;
    }

    div#__next {
      display: flex;
      flex-direction: column;
      text-align: center;
      background-color: #333333;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
    }

    footer {
      padding: 8px 10px 10px 10px;
      background-color: #222222;

      & > p {
        color: #ffffff;
        letter-spacing: -1px;
        transition: all 0.3s;
        font-weight: 500;

        &#blog-link {
          margin: 2px 0;

          & > a {
            transition: all 0.3s;
            box-sizing: border-box;
            display: inline-block;
            color: #ffffff;
            border: 2px solid #ffffff;
            border-radius: 20px;
            padding: 5px 10px;
            box-shadow: 0 0 10px -4px #ffffff;
            margin: 2px;

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
              font-weight: 900;
              font-family: 'Font Awesome 5 Brands', sans-serif;
            }
          }
        }

        &#blog-copyright {
          font-weight: 900;
          
          &:before {
            content: '\\f1f9';
            margin-right: 5px;
            font-weight: 500;
            font-family: 'Font Awesome 5 Free', sans-serif;
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      footer p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      footer p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      footer p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={FrontGlobalStyle} />
      <Head>
        {/* 메타 태그 */}
        <title>{ `${pageName}` } - { BlogConfig.title }</title>
        <meta name='description' content={BlogConfig.description} />
        <meta name='author' content={BlogConfig.author} />
        <meta name='generator' content={BlogConfig.generator} />
        <meta name='keywords' content={BlogConfig.keywords} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={BlogConfig.title} />
        <meta property='og:type' content={BlogConfig.siteType} />
        <meta property='og:title' content={pageName} />
        <meta property='og:description' content={BlogConfig.description} />
        <meta property='og:image' content={`${BlogConfig.siteURL}${BlogConfig.siteImage}`} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={`${BlogConfig.siteURL}${pageURL}`} />

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${BlogConfig.author}`} />
        <meta name='twitter:title' content={`${pageName} - ${BlogConfig.title}`} />
        <meta name='twitter:creator' content={`@${BlogConfig.author}`} />
        <meta name='twitter:description' content={BlogConfig.description} />
        <meta name='twitter:image' content={`${BlogConfig.siteURL}${BlogConfig.siteImage}`} />
      </Head>
      <main>{children}</main>
      <footer>
        <p id='blog-link'>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener'/>
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener'/>
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener'/>
        </p>
        <p id='blog-copyright'>{BlogConfig.year}. {BlogConfig.author}.</p>
      </footer>
    </>
  );
};

export default FrontLayout;