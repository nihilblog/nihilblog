import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { A, P, Strong } from '@/components/PostComponents';
import BlogLayout from '@/layouts/BlogLayout';
import { Box, BoxHeader } from '@/components/Content/Box';
import { useMetaData } from '@/hooks';

const BlogNotPoundPage = () => {
  const router = useRouter();

  const pathName = router.asPath.replace('/', '');
  let newPathName: string;

  if (pathName.indexOf('blog/') > -1) {
    newPathName = pathName.replace('blog/', '');
  }

  const blogErrorPageStyle = css`
    & img {
      max-width: 40%;
      display: block;
      margin: 0 auto;
      border-radius: 50%;
    }

    & p span {
      font-size: 150%;
      font-weight: 900;
    }
  `;

  const siteMeta = useMetaData({
    title: '에러 404',
    url: '/404',
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-error-page' css={blogErrorPageStyle}>
          <Box top='100' bottom='100'>
            <BoxHeader i='f00d' w='900' f='Free'>에러 404</BoxHeader>
            <img src='/images/error-image.png' alt='블로그 에러 이미지' />
            <P top='40' bottom='0' align='center'>
              <span>
                페이지를 찾을 수 없습니다.<br />
                경로를 확인해보세요.
              </span><br />
              입력한 주소: <Strong>{pathName}</Strong><br />
              {
                pathName.indexOf('blog/') > -1
                  ? (
                    <>
                      바뀐 주소: <A type='blog' href={`/${newPathName}`}>{newPathName}</A>
                    </>
                  )
                  : ''
              }
            </P>
          </Box>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogNotPoundPage;
