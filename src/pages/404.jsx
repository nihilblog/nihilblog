import React from 'react';
import { P } from '@/components/PostComponents';
import BlogLayout from '@/layouts/BlogLayout';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Strong } from '@/components/PostComponents/Strong';
import { Box, BoxHeader } from '@/components/LayoutComponensts';

const BlogNotPoundPage = () => {
  const router = useRouter();

  const pathName = router.asPath.replace('/', '');

  const blogErrorPageStyle = css`
    & img {
      max-width: 40%;
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      transition: all 0.3s;
    }

    & p span {
      font-size: 150%;
      font-weight: 900;
    }
  `;

  const siteData = {
    pageName: '에러 404',
    pageURL: '/404',
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-error-page' css={blogErrorPageStyle}>
          <Box top={'100'} bottom={'100'}>
            <BoxHeader i='f00d' w='900' f='Free'>에러 404</BoxHeader>
            <img src={'/images/error-image.png'} alt='블로그 에러 이미지' />
            <P top='40' bottom='0' align='center'>
              <span>
                페이지를 찾을 수 없습니다.<br />
                경로를 확인해보세요.
              </span><br />
              입력한 주소: <Strong>{pathName}</Strong>
            </P>
          </Box>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogNotPoundPage;