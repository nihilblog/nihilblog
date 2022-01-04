import React, { useState, useCallback } from 'react';
import { css, Global } from '@emotion/react';

interface Props {
  children?: string;
}

export const Spoiler = ({ children, }: Props) => {
  const [ isClick, setIsClick, ] = useState(false);
  const [ content, setContent, ] = useState('스포일러');
  const [ click, setClick, ] = useState({
    background: '#666666',
    color: '#cccccc',
    userSelect: 'user-select: none;',
    hover: css`
      &:hover {
        color: #ffffff;
        background-color: #333333;
      }
    `,
  });

  const onClickWord = useCallback(() => {
    if (isClick === false) {
      setIsClick(true);
      setContent(children);
      setClick({
        ...click,
        background: '#dddddd',
        color: '#333333',
        userSelect: '',
        hover: css``,
      });
    } else {
      setIsClick(false);
      setContent('스포일러');
      setClick({
        ...click,
        background: '#666666',
        color: '#cccccc',
        userSelect: 'user-select: none;',
        hover: css`
          &:hover {
            color: #ffffff;
            background-color: #333333;
          }
        `,
      });
    }
  }, [ isClick, children, click, ]);

  const SpoilerStyle = css`
    position: relative;

    &:hover .spo-tip {
      opacity: 1;
      pointer-events: auto;
    }

    & > .spo-body {
      padding: 0 7px;
      border-radius: 5px;
      background-color: ${click.background};
      color: ${click.color};
      ${click.userSelect}
      cursor: pointer;
      text-indent: 0;
      margin: 0 2px;
      font-size: 90%;

      ${click.hover}
    }

    & > .spo-tip {
      padding: 10px;
      border-radius: 10px;
      background-color: #333333;
      color: #ffffff;
      letter-spacing: -1px;
      position: absolute;
      font-size: 90%;
      user-select: none;
      text-indent: 0;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      opacity: 0;
      pointer-events: none;
      line-height: 1.5;

      &:before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        background-color: #333333;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  `;

  const tipSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .post-spoiler:hover .spo-tip {top: -55px;}
      .spo-tip {
        width: 150px;
        top: -55px;
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .post-spoiler:hover .spo-tip {top: -60px;}
      .spo-tip {
        width: 185px;
        top: -60px;
      }
    }

    @media (min-width: 801px) {
      .post-spoiler:hover .spo-tip {top: -65px;}
      .spo-tip {
        width: 220px;
        top: -65px;
      }
    }
  `;

  return (
    <>
      <Global styles={tipSize} />
      <span className='post-spoiler' css={SpoilerStyle}>
        {
          isClick
            ? ''
            : <span className='spo-tip'>클릭하면 스포일러가 드러납니다.</span>
        }
        <span className='spo-body' onClick={onClickWord}>{content}</span>
      </span>
    </>
  );
};
