import Link from 'next/link';
import React from 'react';
import { css } from '@emotion/react';
import {
  FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight
} from 'react-icons/fa';
import size from '@/data/size.data';
import { IPostString } from '@/types';

interface Props {
  type?: IPostString;
  prev?: number;
  next?: number;
  current?: number;
  total?: number;
  top?: string;
  bottom?: string;
}

export const Pagination = ({
  prev, next, current, total, type, top = '50', bottom = '100',
}: Props) => {
  const isFirst = current === 1;
  const isLast = current === total;

  const firstPath = `/${type}/page/1`;
  const lastPath = `/${type}/page/${total}`;
  const prevPath = `/${type}/page/${prev}`;
  const nextPath = `/${type}/page/${next}`;

  const PaginationStyle = css({
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
    borderRadius: '10px',
    padding: '7px 10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px -4px #333333',
    letterSpacing: '-1px',
    textAlign: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    '& > #page-counter': {
      marginLeft: '10px',
      marginRight: '10px',
      color: '#333333',
    },

    [`& > span > span#page-to-first,
    & > span > span#page-to-prev,
    & > span > span#page-to-next,
    & > span > span#page-to-last`]: {
      padding: '5px 8px',
      margin: '3px',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaaaaa',
      backgroundColor: '#33333310',
      borderRadius: '5px',
      fontWeight: 500,
      border: 'none',
      lineHeight: '1',

      '& > svg': {
        fill: '#aaaaaa',
      },
    },

    [`& > span > a#page-to-first,
    & > span > a#page-to-prev,
    & > span > a#page-to-next,
    & > span > a#page-to-last`]: {
      padding: '5px 8px',
      margin: '3px',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555555',
      backgroundColor: '#33333330',
      borderRadius: '5px',
      fontWeight: 500,
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
      lineHeight: '1',

      '& > svg': {
        fill: '#555555',
      },

      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff',

        '& > svg': {
          fill: '#ffffff',
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      [`& a,
      & span`]: {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      [`& a,
      & span`]: {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      [`& a,
      & span`]: {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      <div id='blog-post-paginator' css={PaginationStyle}>
        <span id='prev'>
          {
            !isFirst
              ? (
                <Link href={firstPath} passHref>
                  <a id='page-to-first'>
                    <FaAngleDoubleLeft />
                  </a>
                </Link>
              )
              : (
                <span id='page-to-first'>
                  <FaAngleDoubleLeft />
                </span>
              )
          }
          {
            !isFirst
              ? (
                <Link href={prevPath} passHref>
                  <a id='page-to-prev'>
                    <FaAngleLeft />
                  </a>
                </Link>
              )
              : (
                <span id='page-to-prev'>
                  <FaAngleLeft />
                </span>
              )

          }
        </span>
        <span id='page-counter'>{current} / {total}</span>
        <span id='next'>
          {
            !isLast
              ? (
                <Link href={nextPath} passHref>
                  <a id='page-to-next'>
                    <FaAngleRight />
                  </a>
                </Link>
              )
              : (
                <span id='page-to-next'>
                  <FaAngleRight />
                </span>
              )
          }
          {
            !isLast
              ? (
                <Link href={lastPath} passHref>
                  <a id='page-to-last'>
                    <FaAngleDoubleRight />
                  </a>
                </Link>
              )
              : (
                <span id='page-to-last'>
                  <FaAngleDoubleRight />
                </span>
              )
          }
        </span>
      </div>
    </>
  );
};
