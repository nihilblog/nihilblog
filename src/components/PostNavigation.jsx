import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import size from '@/data/size';

const PostNavigation = ({ prev, next, type = '', }) => {
  let path;

  if (type === 'post') {
    path = 'post';
  } else {
    path = 'notice';
  }

  const postNavigationStyle = css`
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 0 10px -4px #333333;
    box-sizing: border-box;
    letter-spacing: -1px;
    font-weight: 500;

    & > .nav-button {
      &:nth-of-type(1) {
        margin-bottom: 5px;

        & > a {
          display: block;
          border: 2px solid #555555;
          color: #555555;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: left;
          transition: all 0.3s;
          letter-spacing: -1px;

          &:hover {
            color: #ffffff;
            background-color: #333333;
            border: 2px solid #333333;
            transition: all 0.3s;

            & > span {
              color: #333333;
              background-color: #ffffff;
            }
          }

          & > span {
            color: #ffffff;
            background-color: #555555;
            border-radius: 10px;
            padding: 0 10px;
            margin-right: 10px;
            transition: all 0.3s;

            &:before {
              content: '\\f359';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 900;
              margin-right: 5px;
            }
          }
        }

        & > .message {
          display: block;
          border: 2px solid #55555550;
          color: #55555550;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: left;
          transition: all 0.3s;
          letter-spacing: -1px;

          & > span {
            color: #ffffffb0;
            background-color: #55555550;
            border-radius: 10px;
            padding: 0 10px;
            margin-right: 10px;
            transition: all 0.3s;

            &:before {
              content: '\\f359';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 900;
              margin-right: 5px;
            }
          }
        }
      }

      &:nth-of-type(2) {
        & > a {
          display: block;
          border: 2px solid #555555;
          color: #555555;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: right;
          transition: all 0.3s;
          letter-spacing: -1px;

          &:hover {
            color: #ffffff;
            background-color: #333333;
            border: 2px solid #333333;
            transition: all 0.3s;

            & > span {
              color: #333333;
              background-color: #ffffff;
            }
          }

          & > span {
            color: #ffffff;
            background-color: #555555;
            border-radius: 10px;
            padding: 0 10px;
            margin-left: 10px;
            transition: all 0.3s;

            &:after {
              content: '\\f35a';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 900;
              margin-left: 5px;
            }
          }
        }

        & > .message {
          display: block;
          border: 2px solid #55555550;
          color: #55555550;
          padding: 10px;
          font-weight: 500;
          border-radius: 10px;
          text-align: right;
          transition: all 0.3s;
          letter-spacing: -1px;

          & > span {
            color: #ffffffb0;
            background-color: #55555550;
            border-radius: 10px;
            padding: 0 10px;
            margin-left: 10px;
            transition: all 0.3s;

            &:after {
              content: '\\f35a';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 900;
              margin-left: 5px;
            }
          }
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
      <div css={postNavigationStyle}>
        {
          prev === null
            ? (
              <p className='nav-button'>
                <span className='message'><span>이전 포스트</span>이전 포스트가 없습니다.</span>
              </p>
            )
            : (prev && (
              <p className='nav-button'>
                <Link
                  className='nav-link'
                  href={`/blog/${String(path)}/${String(prev.filePath.replace('.mdx', ''))}`}
                  passHref
                >
                  <a><span>이전 포스트</span>{prev.frontMatter.title}</a>
                </Link>
              </p>
            ))
        }
        {
          next === null
            ? (
              <p className='nav-button'>
                <span className='message'>다음 포스트가 없습니다.<span>다음 포스트</span></span>
              </p>
            )
            : (next && (
              <p className='nav-button'>
                <Link
                  className='nav-link'
                  href={`/blog/${String(path)}/${String(next.filePath.replace('.mdx', ''))}`}
                  passHref
                >
                  <a>{next.frontMatter.title}<span>다음 포스트</span></a>
                </Link>
              </p>
            ))
        }
      </div>
    </>
  );
};

export default PostNavigation;