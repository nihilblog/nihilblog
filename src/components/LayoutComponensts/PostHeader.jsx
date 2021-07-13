import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const PostHeader = ({ children, i, w, f, top = '0', bottom = '10', }) => {
  const linkHeaderStyle = css`
    & > a {
      margin-top: ${top}px;
      margin-bottom: ${bottom}px;
      display: block;
      font-weight: 500;
      color: #555555;
      border: 2px solid #555555;
      padding: 5px 10px;
      border-radius: 10px;
      transition: all 0.3s;
      letter-spacing: -1px;
      text-align: justify;

      &:before {
        content: '\\${i}';
        font-weight: ${w};
        font-family: 'Font Awesome 5 ${f}', sans-serif;
        margin-right: 10px;
      }

      &:hover {
        transition: all 0.3s;
        background-color: #333333;
        border: 2px solid #333333;
        color: #ffffff;
      }

      @media (min-width: 1px) and (max-width: 600px) {
        font-size: ${size[3]};
      }

      @media (min-width: 601px) and (max-width: 800px) {
        font-size: ${size[4]};
      }

      @media (min-width: 801px) {
        font-size: ${size[5]};
      }
    }
  `;

  return (
    <>
      <h3 css={linkHeaderStyle}>{children}</h3>
    </>
  );
};

PostHeader.propTypes = {
  children: PropTypes.node,
  i: PropTypes.string,
  w: PropTypes.string,
  f: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};