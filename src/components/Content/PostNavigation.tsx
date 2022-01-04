import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import { size } from '@/data';
import { IPostNav } from '@/types';

export const PostNavigation = ({ prev, next, type, }: IPostNav) => {
  const prevHref = prev ? `/${String(type)}/${String(prev.slug)}` : '';
  const nextHref = next ? `/${String(type)}/${String(next.slug)}` : '';

  const PostNavigationStyle = css`
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
        justify-content: center;
        line-height: 1;

        & > svg {
          fill: #ffffff;
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
        background-color: #33333310;
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
      & p {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & p {
        font-size: ${size[3]};
      }
    }
  `;

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
