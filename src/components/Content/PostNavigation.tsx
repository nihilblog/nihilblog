import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import size from '@/data/size.data';
import { IPostNav } from '@/types';

export const PostNavigation = ({ prev, next, type, }: IPostNav) => {
  const prevHref = prev ? `/${String(type)}/${String(prev.slug)}` : '';
  const nextHref = next ? `/${String(type)}/${String(next.slug)}` : '';

  const PostNavigationStyle = css({
    marginBottom: '100px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px -4px #333333',
    letterSpacing: '-1px',

    '& > .nav-button': {
      margin: '5px 0',
      lineHeight: '1',
      display: 'flex',
      flexDirection: 'row',

      ':nth-of-type(1)': {
        marginTop: '0',
      },

      ':nth-last-of-type(1)': {
        marginBottom: '0',
      },

      '& > .nav-label': {
        padding: '10px',
        backgroundColor: '#555555',
        color: '#ffffff',
        borderRadius: '5px',
        marginRight: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1',

        '& > svg': {
          fill: '#ffffff',
          marginLeft: '5px',
        },
      },

      '& > .message': {
        flex: '1',
        backgroundColor: '#33333310',
        color: '#aaaaaa',
        padding: '10px',
        borderRadius: '5px',
      },

      '& > .nav-link': {
        flex: '1',
        backgroundColor: '#33333330',
        color: '#555555',
        padding: '10px',
        borderRadius: '5px',
        lineHeight: '1.2',

        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#333333',
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& p': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& p': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& p': {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      <div id='blog-post-navigation' css={PostNavigationStyle}>
        {
          next === null
            ? (
              <p className='nav-button'>
                <span className='nav-label next'>다음 포스트<FaArrowAltCircleUp /></span>
                <span className='message'>다음 포스트가 없습니다.</span>
              </p>
            )
            : (next && (
              <p className='nav-button'>
                <span className='nav-label next'>다음 포스트<FaArrowAltCircleUp /></span>
                <Link href={nextHref} passHref>
                  <a className='nav-link'>{next.frontMatter.title}</a>
                </Link>
              </p>
            ))
        }
        {
          prev === null
            ? (
              <p className='nav-button'>
                <span className='nav-label prev'>이전 포스트<FaArrowAltCircleDown /></span>
                <span className='message'>이전 포스트가 없습니다.</span>
              </p>
            )
            : (prev && (
              <p className='nav-button'>
                <span className='nav-label prev'>이전 포스트<FaArrowAltCircleDown /></span>
                <Link href={prevHref} passHref>
                  <a className='nav-link'>{prev.frontMatter.title}</a>
                </Link>
              </p>
            ))
        }
      </div>
    </>
  );
};
