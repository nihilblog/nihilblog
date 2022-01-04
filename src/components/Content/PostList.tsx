import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { IPostList } from '@/types';
import { size } from '@/data';

interface Props {
  post: IPostList
}

export const PostList = ({ post, }: Props) => {
  const [ type, setType, ] = useState<string>('');
  const [ className, setClassName, ] = useState<string>('');
  const [ path, setPath, ] = useState<string>('');
  const [ color, setColor, ] = useState<string[]>([]);

  const postNumber = post.id;

  useEffect(() => {
    if (post.type === 'notice') {
      setType('공지');
      setClassName('red');
      setPath(post.link);
      setColor([ '#b90c0c', '#800505', ]);
    } else if (post.type === 'illust') {
      setType('일러스트');
      setClassName('green');
      setPath(post.link);
      setColor([ '#11b32c', '#047918', ]);
    } else if (post.type === 'post') {
      setType('포스트');
      setClassName('blue');
      setPath(post.link);
      setColor([ '#3f91ff', '#1f6acc', ]);
    }
  }, []);

  const PostListStyle = css`
    margin: 30px 0;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px -4px #333333;

    & > h2 {
      padding: 5px;
      border: 2px solid ${color[0]}70;
      border-radius: 10px 10px 0 0;

      & > span {
        letter-spacing: -1px;
        font-weight: 900;
        color: #333333;
      }

      & > .color {
        font-size: 80%;
        padding: 5px 10px;
        color: #ffffff;
        display: inline-block;
        border-radius: 10px;
        margin-right: 10px;
      }

      & > .${className} {
        background-color: ${color[0]};
      }

      & > .count {
        margin-right: 5px;
      }
    }

    & > p {
      padding: 5px;
      letter-spacing: -1px;
      border: 2px solid ${color[0]}70;
      border-top: none;
      border-radius: 0 0 10px 10px;

      & > a {
        color: ${color[0]};

        &:hover {
          color: ${color[1]};
          text-decoration: underline;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > h2 {
        font-size: ${size[3]};
      }

      & > p {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > h2 {
        font-size: ${size[4]};
      }

      & > p {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & > h2 {
        font-size: ${size[5]};
      }

      & > p {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <div css={PostListStyle}>
        <h2>
          <span className={`count color ${className}`}>{postNumber}</span>
          <span className={`color ${className}`}>{type}</span>
          <span>{post.title}</span>
        </h2>
        <p>
          <a href={path} target='_blank' rel='noopener noreferrer'>{path}</a>
        </p>
      </div>
    </>
  );
};
