import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';

export const Dl = ({ children, top = '40', bottom = '40', }) => {
  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    padding: 0 10px;

    & > dt {
      margin-top: 10px;
      padding: 5px 10px;
      border-radius: 10px 10px 0 0;
      background-color: #555555;
      color: #ffffff;
      text-align: justify;
      font-weight: 500;

      &:before {
        content: '\\f27a';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 5px;
      }
    }

    & > dd {
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 0 0 10px 10px;
      background-color: #ffffff;
      border: 2px solid #555555;
      border-top: none;
      color: #333333;
      text-align: justify;
      font-weight: 500;

      &:before {
        content: '\\f022';
        font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 5px;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > dt {font-size: ${size[2]};}
      & > dd {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > dt {font-size: ${size[3]};}
      & > dd {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > dt {font-size: ${size[4]};}
      & > dd {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <dl className='post-description-list' css={style}>
        {children}
      </dl>
    </>
  );
};

Dl.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
};
