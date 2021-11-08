import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { IFrontMatter } from '@/types';
import getUTC9 from '@/utils/getUTC9';

interface Props {
  frontMatter: IFrontMatter;
  fullPath: string;
}

export const ArchiveItem = ({ frontMatter, fullPath, }: Props) => {
  const [ type, setType, ] = useState('');
  const [ color, setColor, ] = useState('');
  const [ icon, setIcon, ] = useState('');

  useEffect(() => {
    if (frontMatter.type === 'notice') {
      setType('공지');
      setColor('#b90c0c');
      setIcon('f0f3');
    } else if (frontMatter.type === 'illust') {
      setType('일러스트');
      setColor('#11b32c');
      setIcon('f53f');
    } else if (frontMatter.type === 'post') {
      setType('포스트');
      setColor('#3f91ff');
      setIcon('f039');
    }
  }, []);

  const style = css`
    margin: 20px 0;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > p {
      &:nth-of-type(1) {
        margin-bottom: 8px;

        & > span {
          background-color: ${color};
          color: #ffffff;
          padding: 5px 10px;
          display: inline-block;
          border-radius: 10px;

          text-align: center;

          &:nth-of-type(1),
          &:nth-of-type(2) {
            margin-right: 5px;
          }

          &:nth-of-type(2) {
            &:before {
              content: '\\${icon}';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 900;
              margin-right: 5px;
            }
          }

          &:nth-of-type(3) {
            background-color: #555555;

            &:before {
              content: '\\f017';
              font-family: 'Font Awesome 5 Free', sans-serif;
              font-weight: 500;
              margin-right: 5px;
            }
          }
        }
      }

      &:nth-of-type(2) {
        & > a {
          display: block;
          background-color: #33333330;
          color: #555555;
          padding: 5px 10px;
          border-radius: 10px;

          &:hover {
            color: #ffffff;
            background-color: #333333;
          }

          &:before {
            content: '\\${icon}';
            font-family: 'Font Awesome 5 Free', sans-serif;
            font-weight: 900;
            margin-right: 10px;
          }
        }
      }
    }
  `;

  return (
    <>
      <div css={style}>
        <p className='archive-index-type'>
          <span>No.{frontMatter.id}</span>
          <span>{type}</span>
          <span>{getUTC9(frontMatter.createdAt as number)}</span>
        </p>
        <p className='archive-post-link'>
          <Link href={fullPath} passHref>
            <a>{frontMatter.title}</a>
          </Link>
        </p>
      </div>
    </>
  );
};
