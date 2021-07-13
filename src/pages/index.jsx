import React from 'react';
import { css, Global } from '@emotion/react';
import Link from 'next/link';
import FrontLayout from '@/layouts/FrontLayout';
import size from '@/data/size';

const BlogFrontPage = () => {
  const frontIndexStyle = css`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    & > #scroll-wrapper {
      & > img {
        width: 80%;
        margin: 0 auto 10px auto;
        transition: all 0.3s;
        display: block;
      }

      & > p {
        color: #ffffff;
        margin-bottom: 20px;
        transition: all 0.3s;
        letter-spacing: -1px;
        font-weight: 400;
        line-height: 1.8;
      }

      & > nav {
        & > a {
          color: #ffffff;
          padding: 10px;
          border: 2px solid #ffffff;
          border-radius: 40px;
          box-shadow: 0 0 10px -4px #ffffff;
          margin: 4px;
          display: inline-block;
          transition: all 0.3s;
          box-sizing: border-box;
          letter-spacing: -1px;
          font-size: 120%;
          line-height: 100%;

          &:hover {
            transition: all 0.3s;
            color: #333333;
            background-color: #ffffff;
          }

          &#link-blog:before {
            content: '\\f0a9';
            margin-right: 10px;
            font-weight: 900;
            font-family: 'Font Awesome 5 Free', sans-serif;
          }

          &#link-about:before {
            content: '\\f05a';
            margin-right: 10px;
            font-weight: 900;
            font-family: 'Font Awesome 5 Free', sans-serif;
          }
        }
      }
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      #front-message {font-size: ${size[1]};}
      #front-links {font-size: ${size[2]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      #front-message {font-size: ${size[2]};}
      #front-links {font-size: ${size[3]};}
    }

    @media (min-width: 801px) {
      #front-message {font-size: ${size[3]};}
      #front-links {font-size: ${size[4]};}
    }
  `;

  const siteData = {
    pageName: '프론트',
    pageURL: '/',
  };

  return (
    <>
      <Global styles={fontSize} />
      <FrontLayout {...siteData}>
        <div id='front-index-page' css={frontIndexStyle}>
          <div id='scroll-wrapper'>
            <img src={'/images/nihilog-front-logo.svg'} alt='니힐로그 로고' />
            <p id='front-message'>
              니힐로그를 방문해주신 여러분 진심으로 환영합니다.<br />
              니힐로그는 프로그래밍, 일본어, 게임을 포함한 여러가지 주제를 다루고 있습니다.<br />
              아래의 링크 중 원하는 링크를 클릭해 블로그를 살펴보세요!
            </p>
            <nav id='front-links'>
              <Link href={'/blog'}><a id='link-blog'>블로그 홈</a></Link>
              <Link href={'/about'}><a id='link-about'>블로그 소개</a></Link>
            </nav>
          </div>
        </div>
      </FrontLayout>
    </>
  );
};

export default BlogFrontPage;