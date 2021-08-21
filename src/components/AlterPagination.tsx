import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import { IPagination } from '@/types';

const AlterPagination = ({
  prev, next, first, last, current, total, top = '50', bottom = '100',
}: IPagination) => {
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

    & > span > button#page-to-first.non-active,
    & > span > button#page-to-prev.non-active,
    & > span > button#page-to-next.non-active,
    & > span > button#page-to-last.non-active,
    & > span > button#page-to-first.active,
    & > span > button#page-to-prev.active,
    & > span > button#page-to-next.active,
    & > span > button#page-to-last.active {
      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
      }
    }

    & > span > button#page-to-first.non-active,
    & > span > button#page-to-prev.non-active,
    & > span > button#page-to-next.non-active,
    & > span > button#page-to-last.non-active {
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      color: #aaaaaa;
      background-color: #33333310;
      border-radius: 5px;
      border: none;
    }

    & > span > button#page-to-first.active,
    & > span > button#page-to-prev.active,
    & > span > button#page-to-next.active,
    & > span > button#page-to-last.active {
      padding: 0 8px;
      margin: 3px;
      display: inline-block;
      border-radius: 5px;
      font-weight: 500;
      background-color: #33333330;
      color: #555555;
      outline: none;
      cursor: pointer;
      border: none;

      &:hover {
        background-color: #333333;
        color: #ffffff;
      }
    }

    & > span > button#page-to-first.non-active:before,
    & > span > button#page-to-first.active:before {content: '\\f100';}

    & > span > button#page-to-prev.non-active:before,
    & > span > button#page-to-prev.active:before {content: '\\f104';}

    & > span > button#page-to-next.non-active:before,
    & > span > button#page-to-next.active:before {content: '\\f105';}

    & > span > button#page-to-last.non-active:before,
    & > span > button#page-to-last.active:before {content: '\\f101';}

    @media (min-width: 1px) and (max-width: 600px) {
      & button,
      & span {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & button,
      & span {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & button,
      & span {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div id='blog-post-paginator' css={paginatorStyle}>
        <span id='prev'>
          {
            !isFirst
              ? <button type='button' aria-label='first' onClick={first} id='page-to-first' className='active' />
              : <button type='button' aria-label='first' id='page-to-first' className='non-active' />
          }
          {
            !isFirst
              ? <button type='button' aria-label='prev' onClick={prev} id='page-to-prev' className='active' />
              : <button type='button' aria-label='prev' id='page-to-prev' className='non-active' />
          }
        </span>
        <span id='page-counter'>{current + 1} / {total}</span>
        <span id='next'>
          {
            !isLast
              ? <button type='button' aria-label='next' onClick={next} id='page-to-next' className='active' />
              : <button type='button' aria-label='next' id='page-to-next' className='non-active' />
          }
          {
            !isLast
              ? <button type='button' aria-label='last' onClick={last} id='page-to-last' className='active' />
              : <button type='button' aria-label='last' id='page-to-last' className='non-active' />
          }
        </span>
      </div>
    </>
  );
};

export default AlterPagination;
