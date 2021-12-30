import React from 'react';
import { css } from '@emotion/react';
import {
  FaAlignJustify, FaArchive, FaBell, FaFolder, FaHome, FaInfoCircle, FaPalette, FaTags
} from 'react-icons/fa';
import size from '@/data/size.data';
import { LinkBlock } from './LinkBlock';

export const NavBlock = () => {
  const NavBlockStyle = css({
    padding: '13px 10px',
    backgroundColor: '#333333',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    letterSpacing: '-1px',

    '& > a': {
      boxSizing: 'border-box',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#dddddd',
      backgroundColor: '#444444',
      borderRadius: '10px',
      padding: '10px',
      margin: '2px 4px',
      lineHeight: '1',

      '& > svg': {
        fill: '#dddddd',
        marginRight: '5px',
      },

      '&:nth-of-type(1)': {
        marginLeft: '0',
      },

      '&:nth-last-of-type(1)': {
        marginRight: '0',
      },

      [`
        &:hover,
        &.selected
      `]: {
        color: '#333333',
        backgroundColor: '#ffffff',

        '& > svg': {
          fill: '#333333',
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

  return (
    <>
      <nav id='blog-main-menu' css={NavBlockStyle}>
        <LinkBlock href='/'><FaHome />홈</LinkBlock>
        <LinkBlock href='/about'><FaInfoCircle />소개</LinkBlock>
        <LinkBlock href='/notice/page/1' type='notice'><FaBell />공지</LinkBlock>
        <LinkBlock href='/post/page/1' type='post'><FaAlignJustify />포스트</LinkBlock>
        <LinkBlock href='/categories' type='categories'><FaFolder />카테고리</LinkBlock>
        <LinkBlock href='/tags' type='tags'><FaTags />태그</LinkBlock>
        <LinkBlock href='/illust/page/1' type='illust'><FaPalette />일러스트</LinkBlock>
        {
          process.env.NODE_ENV === 'development'
            ? (
              <LinkBlock href='/view/page/1' type='view'><FaArchive />포스트 리스트</LinkBlock>
            )
            : (
              <LinkBlock href='/archive' type='archive'><FaArchive />아카이브</LinkBlock>
            )
        }
      </nav>
    </>
  );
};
