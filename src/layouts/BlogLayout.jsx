import React, { useState } from 'react';
import { css, Global } from '@emotion/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import BlogConfig from '@/data/blogConfig';
import HeaderContainer from '@/components/HeaderContainer';
import NavContainer from '@/components/NavContainer';
import FooterContainer from '@/components/FooterContainer';
import PageContainer from '@/components/PageContainer';
import SiteHead from '@/components/SiteHead';
import SubNavContainer from '@/components/SubNavContainer';

const BlogLayout = ({
  pageName, pageDescription, pageKeywords, pageImage, pageType,
  pageURL, pageTag, pageSection, pageCreated, pageUpdated, children,
}) => {
  const {
    description, siteType, siteImage, siteURL, keywords,
  } = BlogConfig;
  const [ siteData, ] = useState({
    description: pageDescription || description,
    keywords: pageKeywords || keywords,
    image: pageImage || `${siteURL}${siteImage}`,
    type: pageType || siteType,
  });

  const pageProps = {
    pageName,
    pageDescription,
    pageKeywords,
    pageImage,
    pageType,
    pageURL,
    pageTag,
    pageSection,
    pageCreated,
    pageUpdated,
  };

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
      <SiteHead BlogConfig={BlogConfig} siteData={siteData} pageProps={pageProps} />
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

// {
//   pageName, pageDescription, pageKeywords, pageImage, pageType,
//     pageURL, pageTag, pageSection, pageCreated, pageUpdated, children,
// }

BlogLayout.propTypes = {
  pageName: PropTypes.string,
  pageDescription: PropTypes.string,
  pageKeywords: PropTypes.string,
  pageImage: PropTypes.string,
  pageURL: PropTypes.string,
  pageType: PropTypes.string,
  pageTag: PropTypes.string,
  pageSection: PropTypes.string,
  pageCreated: PropTypes.string,
  pageUpdated: PropTypes.string,
  children: PropTypes.node,
};
