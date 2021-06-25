import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const Box = ({ children, top = 30, bottom = 30, }) => {

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
    transition: all 0.3s;
    
    & > .notice-item {
      border: 2px solid #555555;
      display: block;
      padding: 5px 10px;
      border-radius: 10px;
      color: #555555;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;
      
      &:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        content: '\\f0f3';
        margin-right: 5px;
      }
      
      &:hover {
        background-color: #333333;
        color: #ffffff;
        border-color: #333333;
        transition: all 0.3s;
      }
    }

    & > .illust-item-info {
      display: flex;

      & > div:nth-of-type(1) {
        & > img {
          border-radius: 10px;
          border: 2px solid #555555;
          display: block;
          transition: all 0.3s;
          box-sizing: border-box;
        }
      }

      & > div:nth-of-type(2) {
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
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & p,
      & > .notice-item {font-size: ${size[1]};}
      
      & > .illust-item-info {
        flex-direction: column;
        
        & > div:nth-of-type(1) {
          & > img {
            width: 70%;
            margin: 10px auto 20px auto;
          }
        }
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p,
      & > .notice-item {font-size: ${size[2]};}
      
      & > .illust-item-info {
        flex-direction: row;

        & > div:nth-of-type(1) {
          & > img {
            width: 200px;
            margin-right: 20px;
          }
        }
      }
    }

    @media (min-width: 801px) {
      & p,
      & > .notice-item {font-size: ${size[3]};}
      
      & > .illust-item-info {
        flex-direction: row;

        & > div:nth-of-type(1) {
          & > img {
            width: 250px;
            margin-right: 20px;
          }
        }
      }
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