import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const Score = ({ top = '40', bottom = '40', children, score, }) => {
  const scoreStar = {};
  const weight = {};

  switch (score) {
    case '0.5':
      scoreStar.left = '\\f5c0';
      scoreStar.right = '\\f005 \\f005 \\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '1':
      scoreStar.left = '\\f005';
      scoreStar.right = '\\f005 \\f005 \\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '1.5':
      scoreStar.left = '\\f005 \\f5c0';
      scoreStar.right = '\\f005 \\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '2':
      scoreStar.left = '\\f005 \\f005';
      scoreStar.right = '\\f005 \\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '2.5':
      scoreStar.left = '\\f005 \\f005 \\f5c0';
      scoreStar.right = '\\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '3':
      scoreStar.left = '\\f005 \\f005 \\f005';
      scoreStar.right = '\\f005 \\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '3.5':
      scoreStar.left = '\\f005 \\f005 \\f005 \\f5c0';
      scoreStar.right = '\\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '4':
      scoreStar.left = '\\f005 \\f005 \\f005 \\f005';
      scoreStar.right = '\\f005';
      weight.left = '900';
      weight.right = '500';
      break;
    case '4.5':
      scoreStar.left = '\\f005 \\f005 \\f005 \\f005 \\f5c0';
      scoreStar.right = '';
      weight.left = '900';
      weight.right = '900';
      break;
    case '5':
      scoreStar.left = '\\f005 \\f005 \\f005 \\f005 \\f005';
      scoreStar.right = '';
      weight.left = '900';
      weight.right = '900';
      break;
  }

  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    background: #333333;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s;

    & > h2 {
      font-weight: 500;
      color: #ffffff;
      transition: all 0.3s;
      margin-bottom: 5px;
      letter-spacing: -1px;
    }

    & > p {
      color: #ffff00;
      font-weight: 500;
      transition: all 0.3s;

      &:before {
        content: '${scoreStar.left}';
        font-weight: ${weight.left};
         font-family: 'Font Awesome 5 Free', sans-serif;
        font-size: 150%;
      }

      &:after {
        content: '${scoreStar.right}';
        font-weight: ${weight.right};
         font-family: 'Font Awesome 5 Free', sans-serif;
        font-size: 150%;
        color: #888888;
      }
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .post-review-score h2 {font-size: ${size[4]};}
      
      .post-review-score p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .post-review-score h2 {font-size: ${size[5]};}

      .post-review-score p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      .post-review-score h2 {font-size: ${size[6]};}

      .post-review-score p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      <div className='post-review-score' css={style}>
        <h2>{children}: {score}점</h2>
        <p/>
      </div>
    </>
  );
};

Score.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
  score: PropTypes.string,
};