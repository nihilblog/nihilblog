import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import size from '@/data/size.data';
import { IPostNav } from '@/types';

export const PostNavigation = ({ prev, next, type, }: IPostNav) => {
  const prevHref = prev ? `/${String(type)}/${String(prev.slug)}` : '';
  const nextHref = next ? `/${String(type)}/${String(next.slug)}` : '';

  const postNavigationStyle = css`
    margin-bottom: 100px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px -4px #333333;
    letter-spacing: -1px;

    & > .nav-button {
      margin: 5px 0;
      line-height: 1;
      display: flex;
      flex-direction: row;

      &:nth-of-type(1) {
        margin-top: 0;
      }

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }

      & > .nav-label {
        padding: 10px;
        background-color: #555555;
        color: #ffffff;
        border-radius: 5px;
        margin-right: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;

        &.next:after {
          content: '\\f35b';
          font-family: 'Font Awesome 5 Free', sans-serif;
          font-weight: 900;
          margin-left: 5px;
        }

        &.prev:after {
          content: '\\f358';
          font-family: 'Font Awesome 5 Free', sans-serif;
          font-weight: 900;
          margin-left: 5px;
        }
      }

      & > .message {
        flex: 1;
        background-color: #33333310;
        color: #aaaaaa;
        padding: 10px;
        border-radius: 5px;
      }

      & > .nav-link {
        flex: 1;
        background-color: #33333330;
        color: #555555;
        padding: 10px;
        border-radius: 5px;
        line-height: 1.2;

        &:hover {
          color: #ffffff;
          background-color: #333333;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div id='blog-post-navigation' css={postNavigationStyle}>
        {
          next === null
            ? (
              <p className='nav-button'>
                <span className='nav-label next'>다음 포스트</span>
                <span className='message'>다음 포스트가 없습니다.</span>
              </p>
            )
            : (next && (
              <p className='nav-button'>
                <span className='nav-label next'>다음 포스트</span>
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
                <span className='nav-label prev'>이전 포스트</span>
                <span className='message'>이전 포스트가 없습니다.</span>
              </p>
            )
            : (prev && (
              <p className='nav-button'>
                <span className='nav-label prev'>이전 포스트</span>
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
