import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  siteTitle: '니힐로그',
  siteDescription: '웹 프로그래밍을 중심으로 개발 공부 과정을 기록하는 블로그.',
  siteAuthor: 'NIHILncunia',
  siteGenerator: 'MS Visual Studio Code',
  siteKeywords: '블로그, 코딩, 프로그래밍, 웹 프로그래밍, Blog, Coding, Programming, Web programming, 가이드, Guide',
  siteURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilog.github.io',
  siteImage: '/images/blog-image.png',
  siteType: 'website',
  siteVersion: '4.0.1',
  copyrightYear: new Date().getFullYear(),
  postPerPage: 5,
};

export default config;
