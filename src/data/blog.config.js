import packageJson from '../../package.json';

const BlogConfig = {
  title: '니힐 블로그',
  description: '블로그를 운영할 필요를 느꼈으나 네이버나 티스토리에 질려서 직접 Next.js로 개발한 블로그이고, HTML, CSS, JavaScript 기술을 이용한 웹 개발 위주의 프로그래밍과 일본어 학습자료, 그리고 게임 관련된 컨텐츠를 다루는 블로그입니다.',
  author: 'NIHILncunia',
  generator: 'Visual Studio Code',
  keywords: '블로그, 코딩, 프로그래밍, 웹 프로그래밍, Blog, Coding, Programing, Web programing, 일본어, 일본어 공부, 게임, 게임 정보, Japanese, Japanese learning, Game, Game play',
  siteURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilblog.github.io',
  siteImage: '/images/blog-image.png',
  siteType: 'website',
  version: packageJson.version,
  year: new Date().getFullYear(),
  postPerPage: 5,
};

export default BlogConfig;