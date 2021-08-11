import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const Quote = ({
  top = '40', bottom = '40', who, children,
}) => {
  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    padding: 10px;
    border: 2px solid #33333350;
    border-radius: 10px;
    background-color: #eeeeee;
    letter-spacing: -1px;

    & > blockquote {
      margin-bottom: 10px;
      color: #333333;
      text-align: center;
      font-weight: 500;

      &:before {
        content: '\\f10d';
         font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 10px;
      }

      &:after {
        content: '\\f10e';
         font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-left: 10px;
      }
    }

    & > p {
      text-align: right;
      font-weight: 500;
      color: #333333;
      letter-spacing: -1px;

      &:before {
        content: '\\f007';
         font-family: 'Font Awesome 5 Free', sans-serif;
        font-weight: 900;
        margin-right: 5px;
      }
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .post-quote-block blockquote,
      .post-quote-block p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .post-quote-block blockquote,
      .post-quote-block p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      .post-quote-block blockquote,
      .post-quote-block p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      <div className='post-quote-block' css={style}>
        <blockquote>{children}</blockquote>
        <p>{who}</p>
      </div>
    </>
  );
};

Quote.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
  who: PropTypes.string,
};
