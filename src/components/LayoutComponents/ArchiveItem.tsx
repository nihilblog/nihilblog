import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { IFrontMatter } from '@/types';

interface Props {
  frontMatter: IFrontMatter;
  fullPath: string;
}

export const ArchiveItem = ({ frontMatter, fullPath, }: Props) => {
  const [ word, setWord, ] = useState('');
  const [ color, setColor, ] = useState('');

  useEffect(() => {
    if (frontMatter.notice) {
      setWord('공지');
      setColor('#b90c0c');
    } else if (frontMatter.keywords.length > 0) {
      setWord('일러스트');
      setColor('#11b32c');
    } else {
      setWord('포스트');
      setColor('#3f91ff');
    }
  }, []);

  const style = css`
    margin: 10px 0;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > span {
        background-color: ${color};
        color: #ffffff;
        padding: 5px 10px;
        display: inline-block;
        border-radius: 10px;
        margin-right: 10px;
        width: 70px;
        text-align: center;
      }

      & > a {
        flex: 1;
        width: 100%;
        background-color: #33333330;
        color: #555555;
        padding: 5px 10px;
        border-radius: 10px;

        &:hover {
          color: #ffffff;
          background-color: #333333;
        }
      }
    }
  `;

  return (
    <>
      <div css={style}>
        <p>
          <span>{word}</span>
          <Link href={fullPath} passHref>
            <a>{frontMatter.title}</a>
          </Link>
        </p>
      </div>
    </>
  );
};
