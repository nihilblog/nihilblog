import React from 'react';
import Head from 'next/head';
import { ISiteHead } from '@/types';

export const SiteHead = ({ config, siteData, }: ISiteHead) => {
  const {
    pageName, pageDescription, pageKeywords, pageImage, pageType,
    pageURL, pageTag, pageSection, pageCreated, pageUpdated,
  } = siteData;

  const pageTitle = `${pageName} - ${config.siteTitle}`;
  const URL = `${config.siteURL}${pageURL}`;

  const pageData = {
    description: pageDescription || config.siteDescription,
    keywords: pageKeywords || config.siteKeywords,
    image: pageImage || `${config.siteURL}${config.siteImage}`,
    type: pageType || config.siteType,
  };

  return (
    <>
      <Head>
        {/* 메타 태그 */}
        <title>{ pageTitle }</title>
        <meta name='description' content={pageData.description} />
        <meta name='author' content={config.siteAuthor} />
        <meta name='generator' content={config.siteGenerator} />
        <meta name='keywords' content={pageData.keywords} />
        <link rel='canonical' href={URL} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={config.siteTitle} />
        <meta property='og:type' content={pageData.type} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageData.description} />
        <meta property='og:image' content={pageData.image} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={URL} />

        {/* 오픈그래프 아티클 */}
        {pageData.type === 'article' ? <meta property='article:section' content={pageSection} /> : ''}
        {pageData.type === 'article' ? <meta property='article:tag ' content={pageTag} /> : ''}
        {pageData.type === 'article' ? <meta property='article:author' content={config.siteAuthor} /> : ''}
        {pageData.type === 'article' ? <meta property='article:published_time' content={pageCreated} /> : ''}
        {pageData.type === 'article' ? <meta property='article:modified_time' content={pageUpdated} /> : ''}

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${config.siteAuthor}`} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:creator' content={`@${config.siteAuthor}`} />
        <meta name='twitter:description' content={pageData.description} />
        <meta name='twitter:image' content={pageData.image} />
      </Head>
    </>
  );
};
