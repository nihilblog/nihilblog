import React from 'react';
import { css } from '@emotion/react';
import { FaPaintBrush } from 'react-icons/fa';
import size from '@/data/size.data';
import { LinkBlock } from './LinkBlock';

export const SubNavBlock = () => {
  const SubNavBlockStyle = css({
    padding: '8px 10px',
    backgroundColor: '#444444',
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
      backgroundColor: '#555555',
      borderRadius: '10px',
      padding: '10px',
      margin: '2px',
      lineHeight: '1',

      '& > svg': {
        fill: '#dddddd',
        marginRight: '5px',
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
      <nav id='blog-sub-menu' css={SubNavBlockStyle}>
        <LinkBlock href='/illust/keywords' type='keywords'><FaPaintBrush />키워드</LinkBlock>
      </nav>
    </>
  );
};
