import React, { useState } from 'react';
import BlogConfig from '@/data/blog.config';
import HeaderContainer from '@/components/HeaderContainer';
import NavContainer from '@/components/NavContainer';
import FooterContainer from '@/components/FooterContainer';
import PageContainer from '@/components/PageContainer';
import { css, Global } from '@emotion/react';
import SiteHead from '@/components/SiteHead';

const BlogLayout = ({
  pageName, pageDescription, pageKeywords, pageImage, pageType,
  pageURL, pageTag, pageSection, pageCreated, pageUpdated, children,
}) => {
  const { description, siteType, siteImage, siteURL, keywords, } = BlogConfig;
  const [ siteData, ] = useState({
    description: pageDescription ? pageDescription : description,
    keywords: pageKeywords ? pageKeywords : keywords,
    image: pageImage ? pageImage : `${siteURL}${siteImage}`,
    type: pageType ? pageType : siteType,
  });
  
  const pageProps = {
    pageName, pageDescription, pageKeywords, pageImage, pageType,
    pageURL, pageTag, pageSection, pageCreated, pageUpdated,
  };

  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    @font-face {
      font-family: 'CascadiaCode';
      src: url('https://nihilblog.github.io/fonts/CascadiaCode.eot');
      src:
        url('https://nihilblog.github.io/fonts/CascadiaCode.eot?#iefix') format('embedded-opentype'),
        url('https://nihilblog.github.io/fonts/CascadiaCode.woff2') format('woff2'),
        url('https://nihilblog.github.io/fonts/CascadiaCode.svg#CascadiaCode') format('svg'),
        url('https://nihilblog.github.io/fonts/CascadiaCode.ttf') format('truetype'),
        url('https://nihilblog.github.io/fonts/CascadiaCode.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    * {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans CJK KR', sans-serif;
      color: #333333;
      font-weight: 500;
    }

    body {
      background-color: #cccccc;
      width: 100%;
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

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #bbbbbb;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #222222;
      border-radius: 10px;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      main {max-width: 100%;}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      main {max-width: 100%;}
    }

    @media (min-width: 801px) {
      main {
        max-width: 960px;
        margin: 0 auto;
      }
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      {/* 메타 데이터 */}
      <SiteHead BlogConfig={BlogConfig} siteData={siteData} pageProps={pageProps} />
      {/* 헤더와 메뉴 */}
      <HeaderContainer />
      <NavContainer />

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