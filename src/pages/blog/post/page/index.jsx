import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogLayout from '@/layouts/BlogLayout';
import { Strong } from '@/components/PostComponents/Strong';
import { css, Global } from '@emotion/react';

const BlogPostListMainPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/blog/post/page/1');
  }, []);

  const style = css`
    & > h2 {
      font-weight: 500;
      font-size: 4vw;
    }
  `;

  const globalStyle = css`
    html, body, div#__next, main {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    div#__next {
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const siteData = {
    pageName: '포스트 목록 (1 페이지)',
    pageURL: '/blog/post/page/1',
  };

  return (
    <>
      <Global styles={globalStyle} />
      <BlogLayout {...siteData}>
        <div id='loading' css={style}>
          <h2><Strong>/blog/post/page/1</Strong>(으)로 리다이렉션</h2>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPostListMainPage;