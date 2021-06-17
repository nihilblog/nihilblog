const sitemapGenerator = require('./src/utils/SitemapGenerator');
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  distDir: 'build',
  // 정적 페이지의 결과물이 이 폴더에 생긴다.
  basePath: '',
  // 결과물의 기본 경로를 설정한다.
  pageExtensions: [ 'js', 'jsx', 'mdx', ],
  webpack: (config, { isServer, }) => {
    if (isServer) {
      sitemapGenerator();
    }
    return config;
  },
  eslint: {
    dirs: [],
  },
});