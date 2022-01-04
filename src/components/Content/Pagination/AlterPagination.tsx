import React from 'react';
import { css } from '@emotion/react';
import {
  FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight
} from 'react-icons/fa';
import { size } from '@/data';
import { IPagination } from '@/types';

export const AlterPagination = ({
  prev, next, first, last, current, total, top = '50', bottom = '100',
}: IPagination) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  const AlterPaginationStyle = css({
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

    [`& > span > button#page-to-first.non-active,
    & > span > button#page-to-prev.non-active,
    & > span > button#page-to-next.non-active,
    & > span > button#page-to-last.non-active`]: {
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

    [`& > span > button#page-to-first.active,
    & > span > button#page-to-prev.active,
    & > span > button#page-to-next.active,
    & > span > button#page-to-last.active`]: {
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
      [`& button,
      & span`]: {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      [`& button,
      & span`]: {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      [`& button,
      & span`]: {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      <div id='blog-post-paginator' css={AlterPaginationStyle}>
        <span id='prev'>
          {
            !isFirst
              ? (
                <button type='button' aria-label='first' onClick={first} id='page-to-first' className='active'>
                  <FaAngleDoubleLeft />
                </button>
              )
              : (
                <button type='button' aria-label='first' id='page-to-first' className='non-active'>
                  <FaAngleDoubleLeft />
                </button>
              )
          }
          {
            !isFirst
              ? (
                <button type='button' aria-label='prev' onClick={prev} id='page-to-prev' className='active'>
                  <FaAngleLeft />
                </button>
              )
              : (
                <button type='button' aria-label='prev' id='page-to-prev' className='non-active'>
                  <FaAngleLeft />
                </button>
              )
          }
        </span>
        <span id='page-counter'>{current + 1} / {total}</span>
        <span id='next'>
          {
            !isLast
              ? (
                <button type='button' aria-label='next' onClick={next} id='page-to-next' className='active'>
                  <FaAngleRight />
                </button>
              )
              : (
                <button type='button' aria-label='next' id='page-to-next' className='non-active'>
                  <FaAngleRight />
                </button>
              )
          }
          {
            !isLast
              ? (
                <button type='button' aria-label='last' onClick={last} id='page-to-last' className='active'>
                  <FaAngleDoubleRight />
                </button>
              )
              : (
                <button type='button' aria-label='last' id='page-to-last' className='non-active'>
                  <FaAngleDoubleRight />
                </button>
              )
          }
        </span>
      </div>
    </>
  );
};
