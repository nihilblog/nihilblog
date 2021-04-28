import React from 'react';
import Head from 'next/head';

const SiteHead = ({siteData, BlogConfig, pageProps}) => {
  const {
    title, description, author, generator, siteType,
    siteImage, siteURL, keywords,
  } = BlogConfig;
  
  const {
    pageName, pageDescription, pageKeywords, pageImage, pageType,
    pageURL, pageTag, pageSection, pageCreated, pageUpdated,
  } = pageProps;
  
  return (
    <>
      <Head>
        {/* 메타 태그 */}
        <title>{ pageName } - { title }</title>
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
        
        {/* 오픈그래프 아티클 */}
        {siteData.type === 'article' ? <meta property='article:section' content={pageSection} /> : ''}
        {siteData.type === 'article' ? <meta property='article:tag ' content={pageTag} /> : ''}
        {siteData.type === 'article' ? <meta property='article:author' content={ author }/> : ''}
        {siteData.type === 'article' ? <meta property='article:published_time' content={pageCreated} /> : ''}
        {siteData.type === 'article' ? <meta property='article:modified_time' content={pageUpdated} /> : ''}
    
        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:title' content={`${pageName} - ${title}`} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:description' content={siteData.description} />
        <meta name='twitter:image' content={siteData.image} />
      </Head>
    </>
  );
};

export default SiteHead;