import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const Ol = ({ children, top = '40', bottom = '40', }) => {
  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    transition: all 0.3s;
    padding: 7px 10px 7px 10px;
    list-style-type: none;
    counter-reset: number;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    font-weight: 500;
    color: #333333;

    & > li {
      margin: 3px 0;
      transition: all 0.3s;

      &:before {
        background: #333333;
        color: #ffffff;
        font-weight: 900;
        padding: 0 5px;
        border-radius: 5px;
        font-size: 90%;
      }

      & > ul {
        border: none;
        background-color: transparent;
        border-radius: 0;
        padding: 0;

        & > li {
          &:before {
            content: '\\f35a';
             font-family: 'Font Awesome 5 Free', sans-serif;
            margin-right: 5px;
            font-weight: 500;
          }
        }
      }

      & > ol {
        border: none;
        background-color: transparent;
        border-radius: 0;
        padding: 0;
        
        & > li {
          &:before {
            background: #555555;
            color: #ffffff;
            font-weight: 900;
            padding: 0 5px;
            border-radius: 5px;
            font-size: 90%;
          }

          & > ul {
            & > li {
              &:before {
                content: '\\f105';
                 font-family: 'Font Awesome 5 Free', sans-serif;
                margin-right: 5px;
                font-weight: 900;
              }
            }
          }

          & > ol {
            border: none;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            
            & > li {
              &:before {
                background: #777777;
                color: #ffffff;
                font-weight: 900;
                padding: 0 5px;
                border-radius: 5px;
                font-size: 90%;
              }
            }
          }
        }
      }
    }

    & ol {
      list-style-type: none;
      counter-reset: number;
    }

    & ul,
    & ol {
      margin: 0 0 0 25px;
    }

    & li {
      counter-increment: number;
      letter-spacing: -1px;

      &:before {
        content: counter(number) '.';
        margin-right: 5px;
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
      <ol className='post-ordered-list' css={style}>{children}</ol>
    </>
  );
};

Ol.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
};