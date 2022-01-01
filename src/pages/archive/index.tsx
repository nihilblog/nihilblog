import React from 'react';
import { css } from '@emotion/react';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';
import BlogLayout from '@/layouts/BlogLayout';
import { IPostArchive } from '@/types';
import { P } from '@/components/PostComponents';
import { useMetaData } from '@/hooks';
import { getTagsAndCategories } from '@/utils/mdx';
import size from '@/data/size.data';
import { Box, BoxHeader } from '@/components/Content/Box';
import { GoogleAd } from '@/components/Content';

const ArchivePage = ({ archives, }: IPostArchive) => {
  const ArchivePageStyle = css({
    textAlign: 'center',

    '& > a': {
      padding: '10px',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4px',
      borderRadius: '10px',
      color: '#555555',
      letterSpacing: '-1px',
      backgroundColor: '#33333330',
      lineHeight: '1',

      '& > svg': {
        fill: '#555555',
        marginRight: '5px',
      },

      '&:hover': {
        color: '#ffffff',
        backgroundColor: '#333333',

        '& > svg': {
          fill: '#ffffff',
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& > a': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& > a': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& > a': {
        fontSize: size[3],
      },
    },
  });

  const siteMeta = useMetaData({
    title: '포스트 아카이브',
    url: '/archive',
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-archive-page'>
          <Box top='100' bottom='100'>
            <BoxHeader w='900' f='Free' i='f187'>포스트 아카이브</BoxHeader>
            <P>이 페이지는 포스트를 공지, 일러스트 같은 구분 없이 작성된 모든 포스트를 월 별로 모아둔 각각의 페이지로 넘어갈 수 있습니다. 아래의 링크들 중에서 원하는 링크를 클릭하면 해당 시간에 작성한 포스트들의 목록을 볼 수 있습니다.</P>
            <div css={ArchivePageStyle}>
              {archives.map((archive) => (
                <Link key={uuid()} href={`/archive/${archive.yearMonth}`}>
                  <a><FaRegCalendarAlt />{archive.yearMonth} ({archive.count}건)</a>
                </Link>
              ))}
            </div>
          </Box>
        </div>
        <GoogleAd pos='bottom' />
      </BlogLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const archives = getTagsAndCategories('yearMonth');

  return {
    props: {
      archives,
    },
  };
};

export default ArchivePage;
