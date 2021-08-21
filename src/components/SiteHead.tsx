import React from 'react';
import Head from 'next/head';
import { ISiteHead } from '@/types';

const SiteHead = ({ BlogConfig, pageProps, }: ISiteHead) => {
  const {
    siteTitle, siteDescription, siteURL, siteKeywords, siteType, siteImage,
    siteAuthor, siteGenerator,
  } = BlogConfig;
  const {
    pageName, pageDescription, pageKeywords, pageImage, pageType,
    pageURL, pageTag, pageSection, pageCreated, pageUpdated,
  } = pageProps;

  const pageTitle = `${pageName} - ${siteTitle}`;
  const URL = `${siteURL}${pageURL}`;

  const pageData = {
    description: pageDescription || siteDescription,
    keywords: pageKeywords || siteKeywords,
    image: pageImage || `${siteURL}${siteImage}`,
    type: pageType || siteType,
  };

  return (
    <>
      <Head>
        {/* 메타 태그 */}
        <title>{ pageTitle }</title>
        <meta name='description' content={pageData.description} />
        <meta name='author' content={siteAuthor} />
        <meta name='generator' content={siteGenerator} />
        <meta name='keywords' content={pageData.keywords} />
        <link rel='canonical' href={URL} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={siteTitle} />
        <meta property='og:type' content={pageData.type} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageData.description} />
        <meta property='og:image' content={pageData.image} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={URL} />

        {/* 오픈그래프 아티클 */}
        {pageData.type === 'article' ? <meta property='article:section' content={pageSection} /> : ''}
        {pageData.type === 'article' ? <meta property='article:tag ' content={pageTag} /> : ''}
        {pageData.type === 'article' ? <meta property='article:author' content={siteAuthor} /> : ''}
        {pageData.type === 'article' ? <meta property='article:published_time' content={pageCreated} /> : ''}
        {pageData.type === 'article' ? <meta property='article:modified_time' content={pageUpdated} /> : ''}

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${siteAuthor}`} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:creator' content={`@${siteAuthor}`} />
        <meta name='twitter:description' content={pageData.description} />
        <meta name='twitter:image' content={pageData.image} />
      </Head>
    </>
  );
};

export default SiteHead;
