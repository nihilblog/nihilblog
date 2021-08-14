import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';

export const Ul = ({ children, top = '40', bottom = '40', }) => {
  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    padding: 7px 10px 7px 10px;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;

    & ul {
      border: none;
      padding: 0;
      background-color: transparent;
      margin: 0 0 0 20px;
    }
    
    & li {
      margin: 3px 0;
      
      &:before {
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }
    }

    & > li {
      &:before {
        content: '\\f35a';
        font-weight: 900;
      }
      
      & > ul > li {
        &:before {
          content: '\\f35a';
          font-weight: 500;
        }
        
        & > ul li {
          &:before {
            content: '\\f105';
            font-weight: 900;
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & li {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & li {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & li {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <ul className='post-unordered-list' css={style}>{children}</ul>
    </>
  );
};

Ul.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
};
