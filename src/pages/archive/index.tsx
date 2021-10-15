import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import BlogLayout from '@/layouts/BlogLayout';
import { IPostArchive } from '@/types';
import { ArchiveBlock, Box, BoxHeader } from '@/components/LayoutComponents';
import getArchive from '@/utils/mdx/getArchive';
import { P } from '@/components/PostComponents';
import { useMetaData } from '@/hooks';

const ArchivePage = ({ archivePosts, }: IPostArchive) => {
  const style = css`
    & > div {
      margin: 30px 0;

      &:nth-of-type(1) {
        margin-top: 100px;
      }

      &:nth-last-of-type(1) {
        margin-bottom: 100px;
      }
    }
  `;

  const siteData = useMetaData({
    pageName: '포스트 아카이브',
    pageURL: '/archive',
  });

  return (
    <>
      <BlogLayout siteData={siteData}>
        <div id='blog-archive-page'>
          <Box top='100' bottom='100'>
            <BoxHeader w='900' f='Free' i='f187'>포스트 아카이브</BoxHeader>
            <P bottom='0'>이 페이지는 월 별로 작성된 포스트를 공지, 일러스트 구분하지 않고 전부 모아서 보여주는 포스트 아카이브입니다.</P>
          </Box>
          <div id='archive-item-list' css={style}>
            {archivePosts.map(({ posts, yearMonth, }) => (
              <ArchiveBlock posts={posts} yearMonth={yearMonth} key={uuid()} />
            ))}
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export default ArchivePage;

export const getStaticProps: GetStaticProps = () => {
  const archivePosts = getArchive();

  return {
    props: {
      archivePosts,
    },
  };
};
