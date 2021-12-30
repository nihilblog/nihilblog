import React from 'react';
import Head from 'next/head';
import { ISiteHead } from '@/types';

export const SiteHead = ({ config, meta, }: ISiteHead) => {
  const {
    title, description, keywords, image, type,
    url, tag, section, created, updated,
  } = meta;

  const siteTitle = `${title} - ${config.siteTitle}`;
  const siteDescription = description || config.siteDescription;
  const siteURL = `${config.siteURL}${url}`;
  const siteKeywords = keywords || config.siteKeywords;
  const siteImage = image || `${config.siteURL}${config.siteImage}`;
  const siteType = type || config.siteType;

  const postAuthor = config.siteAuthor;

  return (
    <>
      <Head>
        {/* 메타 태그 */}
        <title>{ siteTitle }</title>
        <meta name='description' content={siteDescription} />
        <meta name='author' content={postAuthor} />
        <meta name='generator' content={config.siteGenerator} />
        <meta name='keywords' content={siteKeywords} />
        <link rel='canonical' href={siteURL} />

        {/* 오픈그래프 */}
        <meta property='og:site_name' content={config.siteTitle} />
        <meta property='og:type' content={siteType} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:url' content={siteURL} />

        {/* 오픈그래프 아티클 */}
        {siteType === 'article' ? <meta property='article:section' content={section} /> : ''}
        {siteType === 'article' ? <meta property='article:tag ' content={tag} /> : ''}
        {siteType === 'article' ? <meta property='article:author' content={postAuthor} /> : ''}
        {siteType === 'article' ? <meta property='article:published_time' content={created} /> : ''}
        {siteType === 'article' ? <meta property='article:modified_time' content={updated} /> : ''}

        {/* 트위터 카드 */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${postAuthor}`} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:creator' content={`@${postAuthor}`} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={siteImage} />
      </Head>
    </>
  );
};
