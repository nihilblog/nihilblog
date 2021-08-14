import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';

export const Message = ({
  children, color, top = '40', bottom = '40',
}) => {
  const [ colorType, setColorType, ] = useState({
    color: [],
    icon: '',
    word: '',
  });

  useEffect(() => {
    if (color.includes('r')) {
      setColorType({
        ...colorType,
        color: [ '#ff5b5b40', '#fd4444', '#fd444450', ],
        icon: 'f057',
        word: '위험',
      });
    } else if (color.includes('b')) {
      setColorType({
        ...colorType,
        color: [ '#3daeff50', '#0084e2', '#0084e250', ],
        icon: 'f059',
        word: '안내',
      });
    } else if (color.includes('g')) {
      setColorType({
        ...colorType,
        color: [ '#11b32c50', '#05881b', '#05881b50', ],
        icon: 'f05a',
        word: '정보',
      });
    } else if (color.includes('y')) {
      setColorType({
        ...colorType,
        color: [ '#fff70c50', '#a39000', '#a3900050', ],
        icon: 'f06a',
        word: '주의',
      });
    }
  }, []);

  const style = css`
    padding: 10px;
    border-radius: 10px;
    margin: ${top}px 0 ${bottom}px 0;
    font-size: 90%;
    background: ${colorType.color[0]};
    color: ${colorType.color[1]};
    border: 2px solid ${colorType.color[2]};

    & > .message-title {
      text-align: left;
      margin-bottom: 10px;
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
           font-family: 'Font Awesome 5 Free', sans-serif;
        }
      }
    }

    & > .message-content {
      color: inherit;
      
      & > p {
        font-weight: 500;
        text-align: justify;
        letter-spacing: -1px;
        text-indent: 10px;
        color: inherit;
        line-height: 1.6;
        margin: 20px 0;
        
        &:nth-of-type(1) {
          margin-top: 0;
        }
        
        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }

        & > strong {
          color: ${colorType.color[1]};
        }

        & > a {
          color: ${colorType.color[1]};
          background-color: transparent;
          border: 2px solid ${colorType.color[1]};

          &:hover {
            color: #ffffff;
            background-color: ${colorType.color[1]};
          }
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
        <div className='message-content'>{children}</div>
      </div>
    </>
  );
};

Message.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};
