import packageJson from '../../package.json';

const BlogConfig = {
  title: '니힐로그',
  description: '웹 개발을 중심으로 하는 프로그래밍 컨텐츠와 일본어, 게임등의 가이드 컨텐츠를 다루는 블로그.',
  author: 'NIHILncunia',
  generator: 'Webstorm',
  keywords: '블로그, 코딩, 프로그래밍, 웹 프로그래밍, Blog, Coding, Programming, Web programming, 일본어, 일본어 공부, 게임, 게임 정보, Japanese, Japanese learning, Game, Game play, 가이드, Guide',
  siteURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilog.github.io',
  siteImage: '/images/blog-image.png',
  siteType: 'website',
  version: packageJson.version,
  year: new Date().getFullYear(),
  postPerPage: 5,
};

export default BlogConfig;