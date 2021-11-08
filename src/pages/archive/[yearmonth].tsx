import React from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import { useMetaData } from '@/hooks';
import { getAllTimePost, getTagsAndCategories } from '@/utils/mdx';
import { IPosts } from '@/types';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import { ArchiveItem, GoogleAd } from '@/components/PostLayoutComponents';
import { Box, BoxHeader } from '@/components/BoxComponents';

interface Props {
  yearMonth: string;
  posts: IPosts[];
}

const ArchivePostsPage = ({ yearMonth, posts, }: Props) => {
  const totalCount = posts.length;

  const style = css`
    margin-bottom: 100px;
  `;

  const siteMeta = useMetaData({
    title: `"${yearMonth}" 관련 포스트`,
    url: `/archive/${yearMonth}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-archive-posts-page' css={style}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {yearMonth} &rdquo; 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 시간의 포스트 아카이브를 보려면 상단 메뉴에서 아카이브 링크를 클릭하세요.</P>
          </Box>
          <Box>
            {posts.map(({ frontMatter, fullPath, }) => (
              <ArchiveItem key={uuid()} frontMatter={frontMatter} fullPath={fullPath} />
            ))}
          </Box>
        </div>
        <GoogleAd pos='bottom' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const archives = getTagsAndCategories('yearMonth');

  return {
    paths: archives.map((archive) => ({
      params: {
        yearmonth: archive.yearMonth,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    yearmonth: string;
  },
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const allPosts = getAllTimePost();

  const posts = allPosts.filter((post) => post.slug.startsWith(params.yearmonth));

  return {
    props: {
      yearMonth: params.yearmonth,
      posts,
    },
  };
};

export default ArchivePostsPage;
