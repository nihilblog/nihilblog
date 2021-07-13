import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

const AlterPagination = ({ prev, next, first, last, current, total, top = '50', bottom = '100', }) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;
  
  const paginatorStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    & > #page-counter {
      margin-left: 10px;
      margin-right: 10px;
      color: #333333;
    }

    & > span > span#page-to-first.non-active,
    & > span > span#page-to-prev.non-active,
    & > span > span#page-to-next.non-active,
    & > span > span#page-to-last.non-active,
    & > span > span#page-to-first.active,
    & > span > span#page-to-prev.active,
    & > span > span#page-to-next.active,
    & > span > span#page-to-last.active {
      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    & > span > span#page-to-first.non-active,
    & > span > span#page-to-prev.non-active,
    & > span > span#page-to-next.non-active,
    & > span > span#page-to-last.non-active {
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      border: 2px solid #88888890;
      color: #88888890;
      border-radius: 5px;
    }

    & > span > span#page-to-first.active,
    & > span > span#page-to-prev.active,
    & > span > span#page-to-next.active,
    & > span > span#page-to-last.active {
      border: 2px solid #333333;
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      border-radius: 5px;
      font-weight: 500;
      color: #333333;
      transition: all 0.3s;
      background-color: transparent;
      outline: none;

      &:hover {
        background-color: #333333;
        color: #ffffff;
        transition: all 0.3s;
      }
    }

    & > span > span#page-to-first.non-active:before,
    & > span > span#page-to-first.active:before {content: '\\f100';}

    & > span > span#page-to-prev.non-active:before,
    & > span > span#page-to-prev.active:before {content: '\\f104';}

    & > span > span#page-to-next.non-active:before,
    & > span > span#page-to-next.active:before {content: '\\f105';}

    & > span > span#page-to-last.non-active:before,
    & > span > span#page-to-last.active:before {content: '\\f101';}

    @media (min-width: 1px) and (max-width: 600px) {
      & span {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & span {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & span {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div id='blog-post-paginator' css={paginatorStyle}>
        <span id='prev'>
          {
            !isFirst
              ? <span onClick={first} id='page-to-first' className={'active'} />
              : <span id='page-to-first' className={'non-active'} />
          }
          {
            !isFirst
              ? <span onClick={prev} id='page-to-prev' className={'active'} />
              : <span id='page-to-prev' className={'non-active'} />
          }
        </span>
        <span id='page-counter'>{current + 1} / {total}</span>
        <span id='next'>
          {
            !isLast
              ? <span onClick={next} id='page-to-next' className={'active'} />
              : <span id='page-to-next' className={'non-active'} />
          }
          {
            !isLast
              ? <span onClick={last} id='page-to-last' className={'active'} />
              : <span id='page-to-last' className={'non-active'} />
          }
        </span>
      </div>
    </>
  );
};

export default AlterPagination;

AlterPagination.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  first: PropTypes.func,
  last: PropTypes.func,
  current: PropTypes.number,
  total: PropTypes.number,
  top: PropTypes.string,
  bottom: PropTypes.string,
};