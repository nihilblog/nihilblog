import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

const Box = ({ children, top = 30, bottom = 30, }) => {

  const boxStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: justify;
    letter-spacing: -1px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    border-radius: 10px;
    
    & > div:nth-of-type(1) {
      & > p:nth-of-type(1) {
        & > span:nth-of-type(2) {
          display: -webkit-box;
          line-height: 1.55;
          word-break: break-all;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div css={boxStyle}>
        {children}
      </div>
    </>
  );
};

export default Box;