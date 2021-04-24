import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const Message = ({ children, color, top = 40, bottom = 40, }) => {
  const colorType = {};

  if (color === 'red') {
    colorType.color = [ '#ff5b5b40', '#fd4444', '#fd444450', ];
    colorType.icon = 'f057';
    colorType.word = '위험';
  } else if (color === 'blue') {
    colorType.color = [ '#3daeff50', '#0084e2', '#0084e250', ];
    colorType.icon = 'f059';
    colorType.word = '안내';
  } else if (color === 'yellow') {
    colorType.color = [ '#fff70c50', '#a39000', '#a3900050', ];
    colorType.icon = 'f06a';
    colorType.word = '주의';
  } else if (color === 'green') {
    colorType.color = [ '#11b32c50', '#05881b', '#05881b50', ];
    colorType.icon = 'f05a';
    colorType.word = '정보';
  }

  const style = css`
    padding: 10px;
    border-radius: 10px;
    margin: ${top}px 0px ${bottom}px 0px;
    font-size: 90%;
    background: ${colorType.color[0]};
    color: ${colorType.color[1]};
    border: 2px solid ${colorType.color[2]};

    & > .message-title {
      text-align: left;
      margin-bottom: 10px;
      transition: all 0.3s;
      letter-spacing: -1px;
      color: inherit;
      

      & > span {
        font-weight: 900;
        color: inherit;
        font-size: 130%;

        &:before {
          content: '\\${colorType.icon}';
          font-weight: 900;
          margin-right: 5px;
          font-family: 'Font Awesome 5 Free';
        }
      }
    }

    & > p:nth-of-type(2) {
      font-weight: 500;
      text-align: justify;
      transition: all 0.3s;
      letter-spacing: -1px;
      text-indent: 10px;
      color: inherit;

      & > strong {
        color: ${colorType.color[1]};
      }

      & > a {
        color: ${colorType.color[1]};
        border: 2px solid ${colorType.color[1]};
        
        &:hover {
          color: #ffffff;
          background-color: ${colorType.color[1]};
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & p span,
      & p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p span,
      & p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & p span,
      & p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div className={`Message-${color}`} css={style}>
        <p className='message-title'><span>{colorType.word}</span></p>
        <p className='message-content'>{children}</p>
      </div>
    </>
  );
};