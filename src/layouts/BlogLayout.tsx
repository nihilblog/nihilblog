import React, { ReactNode } from 'react';
import { css, Global } from '@emotion/react';
import { useRouter } from 'next/router';
import config from '@/data/config.data';
import { ISiteData } from '@/types';
import draculaTheme from '@/styles/prism-draculaTheme';
import {
  FooterContainer, HeaderContainer, NavContainer, PageContainer, SiteHead, SubNavContainer
} from '@/components/BlogLayoutComponents';

interface Props {
  meta: ISiteData;
  children: ReactNode;
}

const BlogLayout = ({ meta, children, }: Props) => {
  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    @font-face {
      font-family: 'CascadiaCode';
      src: url('https://nihilog.github.io/fonts/CascadiaCode.eot');
      src:
        url('https://nihilog.github.io/fonts/CascadiaCode.eot?#iefix') format('embedded-opentype'),
        url('https://nihilog.github.io/fonts/CascadiaCode.woff2') format('woff2'),
        url('https://nihilog.github.io/fonts/CascadiaCode.svg#CascadiaCode') format('svg'),
        url('https://nihilog.github.io/fonts/CascadiaCode.ttf') format('truetype'),
        url('https://nihilog.github.io/fonts/CascadiaCode.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    * {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans KR', sans-serif;
      color: #333333;
      font-weight: 500;
    }

    body {
      background-color: #cccccc;
      width: 100%;
      overflow-x: hidden;
    }

    html {
      scroll-behavior: smooth;
    }

    html, body, #__next {
      height: 100%;
    }

    #__next {
      display: flex;
      flex-direction: column;

      & > main {
        flex: 1;
        width: 100%;
        box-sizing: border-box;
      }
    }

    a {text-decoration: none;}
    ul {list-style: none;}

    #disqus_thread {
      padding: 5px 20px 0 20px;
      border-radius: 10px;
      background-color: #333333;

      & a {
        color: #ffffff;
      }
    }

    ::selection {
      background-color: #ff5b5b;
      color: #ffffff;
    }

    ${draculaTheme};

    @media (min-width: 1px) and (max-width: 600px) {
      main {max-width: 100%;}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      main {max-width: 100%;}
    }

    @media (min-width: 801px) {
      main {
        max-width: 1000px;
        margin: 0 auto;
      }
    }
  `;

  const router = useRouter();

  return (
    <>
      <Global styles={globalStyle} />
      {/* 메타 데이터 */}
      <SiteHead config={config} meta={meta} />
      {/* 헤더와 메뉴 */}
      <HeaderContainer />
      <NavContainer />
      {
        router.pathname.indexOf('illust') !== -1
          ? <SubNavContainer />
          : ''
      }

      {/* 메인 컨텐츠 */}
      <PageContainer>
        {children}
      </PageContainer>

      {/* 푸터 */}
      <FooterContainer />
    </>
  );
};

export default BlogLayout;
