import React, { useState } from 'react';
import BlogConfig from '@/data/blog.config';
import Head from 'next/head';
import HeaderContainer from '@/components/HeaderContainer';
import NavContainer from '@/components/NavContainer';
import FooterContainer from '@/components/FooterContainer';
import PageContainer from '@/components/PageContainer';
import { css, Global } from '@emotion/react';

const BlogLayout = ({ children, pageName, pageDescription, pageKeywords, pageURL, pageType, pageImage, }) => {
  const { title, description, author, generator, siteType, siteImage, siteURL, keywords, } = BlogConfig;
  const [ siteData, ] = useState({
    description: pageDescription ? pageDescription : description,
    keywords: pageKeywords ? pageKeywords : keywords,
    image: pageImage ? pageImage : `${siteURL}${siteImage}`,
    type: pageType ? pageType : siteType,
  });

  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      padding: 0px;
      margin: 0px;
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

    @media (min-width: 1px) and (max-width: 600px) {
      main {max-width: 100%;}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      main {max-width: 100%;}
    }

    @media (min-width: 801px) {
      main {
        max-width: 960px;
        margin: 0px auto;
      }
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      {/* 메타 데이터 */}
      <Head>
        {/* 메타 태그 */}
        <title>{ `${pageName}` } - { title }</title>
        <meta name='description' content={siteData.description} />
        <meta name='author' content={author} />
        <meta name='generator' content={generator} />
        <meta name='keywords' content={siteData.keywords} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={title} />
        <meta property='og:type' content={siteData.type} />
        <meta property='og:title' content={pageName} />
        <meta property='og:description' content={siteData.description} />
        <meta property='og:image' content={siteData.image} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={`${siteURL}${pageURL}`} />

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:title' content={`${pageName} - ${title}`} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:description' content={siteData.description} />
        <meta name='twitter:image' content={siteData.image} />
      </Head>
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