import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { IPostList } from '@/types';
import size from '@/data/size.data';

interface Props {
  post: IPostList
}

export const PostList = ({ post, }: Props) => {
  const [ type, setType, ] = useState<string>('');
  const [ className, setClassName, ] = useState<string[]>([]);
  const [ path, setPath, ] = useState<string>('');
  const [ color, setColor, ] = useState<string[]>([]);

  const postNumber = post.id;

  useEffect(() => {
    if (post.type === 'notice') {
      setType('공지');
      setClassName([ 'count', 'color red', ]);
      setPath(post.link);
      setColor([ '#b90c0c', '#800505', ]);
    } else if (post.type === 'illust') {
      setType('일러스트');
      setClassName([ 'count', 'color green', ]);
      setPath(post.link);
      setColor([ '#11b32c', '#047918', ]);
    } else if (post.type === 'post') {
      setType('포스트');
      setClassName([ 'count', 'color blue', ]);
      setPath(post.link);
      setColor([ '#3f91ff', '#1f6acc', ]);
    }
  }, []);

  const PostListStyle = css({
    margin: '30px 0',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px -4px #333333',

    '& > h2': {
      padding: '5px',
      border: `2px solid ${color[0]}70`,
      borderRadius: '10px 10px 0 0',

      '& > span': {
        letterSpacing: '-1px',
        fontWeight: 900,
        color: '#333333',
      },

      '& > .color': {
        fontSize: '80%',
        padding: '5px 10px',
        color: '#ffffff',
        display: 'inline-block',
        borderRadius: '10px',
        marginRight: '10px',
      },

      '& > .red': {
        backgroundColor: '#b90c0c',
      },

      '& > .blue': {
        backgroundColor: '#3f91ff',
      },

      '& > .green': {
        backgroundColor: '#11b32c',
      },

      '& > .count': {
        marginRight: '5px',
      },
    },

    '& > p': {
      padding: '5px',
      letterSpacing: '-1px',
      border: `2px solid ${color[0]}70`,
      borderTop: 'none',
      borderRadius: '0 0 10px 10px',

      '& > a': {
        color: color[0],

        '&:hover': {
          color: color[1],
          textDecoration: 'underline',
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& > h2': {
        fontSize: size[3],
      },
      '& > p': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& > h2': {
        fontSize: size[4],
      },
      '& > p': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& > h2': {
        fontSize: size[5],
      },
      '& > p': {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      <div css={PostListStyle}>
        <h2>
          <span className={className.join(' ')}>{postNumber}</span>
          <span className={className[1]}>{type}</span>
          <span>{post.title}</span>
        </h2>
        <p>
          <a href={path} target='_blank' rel='noopener noreferrer'>{path}</a>
        </p>
      </div>
    </>
  );
};
