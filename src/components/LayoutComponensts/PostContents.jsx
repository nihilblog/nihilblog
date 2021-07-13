import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const PostContents = ({ children, type = 'normal', }) => {
  
  const typeIcon = {
    'normal': 'f07b',
    'illust': 'f1fc',
  };
  
  const PostContentsStyle = css`
    & > p {
      margin-top: 2px;
      
      &:nth-of-type(1) {
        line-height: 1.4;
        margin-bottom: 10px;
      }

      & > .info-name {
        display: inline-block;
        border-radius: 10px;
        color: #f54747;
        font-weight: 900;
        margin-right: 5px;
        margin-bottom: 3px;
        margin-top: 2px;
        transition: all 0.3s;
      }

      & > .info-name:before {
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      &:nth-of-type(1) > .info-name:before {content: '\\f039';}

      &:nth-of-type(2) > .info-name:before {
        content: '\\f017';
        font-weight: 500;
      }

      &:nth-of-type(3) > .info-name:before {content: '\\${typeIcon[type]}';}
      &:nth-of-type(4) > .info-name:before {content: '\\f02c';}

      & > .info-description,
      & > .info-time {
        color: #555555;
        letter-spacing: -1px;
        font-weight: 500;
        transition: all 0.3s;
      }

      & > .info-tag,
      & > .info-category,
      & > .info-keyword {
        letter-spacing: -1px;
        color: #555555;
        padding: 0 5px;
        border-radius: 5px;
        border: 2px solid #555555;
        margin-right: 5px;
        margin-bottom: 3px;
        transition: all 0.3s;
        font-weight: 500;
        line-height: 1.8;

        &:hover {
          color: #ffffff;
          background-color: #333333;
          border: 2px solid #333333;
          transition: all 0.3s;
        }
      }
  
      & > .info-tag:before {
        content: '\\f02b';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      & > .info-category:before {
        content: '\\f07c';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      & > .info-keyword:before {
        content: '\\f1fc';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }

      @media (min-width: 1px) and (max-width: 600px) {
        font-size: ${size[1]};
      }

      @media (min-width: 601px) and (max-width: 800px) {
        font-size: ${size[2]};
      }

      @media (min-width: 801px) {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <div css={PostContentsStyle}>
        {children}
      </div>
    </>
  );
};

PostContents.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};