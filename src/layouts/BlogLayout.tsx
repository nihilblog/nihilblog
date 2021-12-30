import React, { ReactNode } from 'react';
import { css, Global } from '@emotion/react';
import { useRouter } from 'next/router';
import config from '@/data/config.data';
import { ISiteData } from '@/types';
import draculaTheme from '@/styles/prism-draculaTheme';
import { SiteHead } from '@/components';
import {
  FooterBlock, HeaderBlock, NavBlock, MainBlock, SubNavBlock
} from '@/components/Layout';

interface Props {
  meta: ISiteData;
  children: ReactNode;
}

const BlogLayout = ({ meta, children, }: Props) => {
  const fontImport = css`
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
  `;
  const globalStyle = css(fontImport, {
    '*': {
      padding: '0',
      margin: '0',
      fontFamily: `'Noto Sans KR', sans-serif`,
      color: '#333333',
      fontWeight: 500,
    },

    body: {
      backgroundColor: '#cccccc',
      width: '100%',
      overflowX: 'hidden',
    },

    'html, body, #__next': {
      height: '100%',
    },

    '#__next': {
      display: 'flex',
      flexDirection: 'column',

      '& > main': {
        flex: '1',
        width: '100%',
        boxSizing: 'border-box',
      },
    },

    a: {
      textDecoration: 'none',
    },

    ul: {
      listStyle: 'none',
    },

    '::selection': {
      backgroundColor: '#ff5b5b',
      color: '#ffffff',
    },
  }, draculaTheme, {
    '@media (min-width: 1px) and (max-width: 600px)': {
      main: {
        maxWidth: '100%',
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      main: {
        maxWidth: '100%',
      },
    },
    '@media (min-width: 801px)': {
      main: {
        maxWidth: '1000px',
        margin: '0 auto',
      },
    },
  });

  const router = useRouter();

  return (
    <>
      <Global styles={globalStyle} />
      {/* 메타 데이터 */}
      <SiteHead config={config} meta={meta} />
      {/* 헤더와 메뉴 */}
      <HeaderBlock />
      <NavBlock />
      {
        router.pathname.indexOf('illust') !== -1
          ? <SubNavBlock />
          : ''
      }

      {/* 메인 컨텐츠 */}
      <MainBlock>
        {children}
      </MainBlock>

      {/* 푸터 */}
      <FooterBlock />
    </>
  );
};

export default BlogLayout;
