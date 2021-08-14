import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';

export const Char = ({
  children, who = '이름', top = '40', bottom = '40', image = '기본',
}) => {
  const style = css`
    margin: ${top}px 0 ${bottom}px 0;
    background-color: #333333;
    color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    
    & > .script-top {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      
      & > img {
        display: inline-block;
        margin-right: 10px;
        border: 1px solid #ffffff50;
        border-radius: 5px;
        width: 40px;
      }
      
      & > span {
        color: #ffffff;
        font-weight: 900;
        letter-spacing: -1px;
        font-size: 110%;
        line-height: 100%;
      }
    }
    & > .script-bottom {
      & > .script {
        color: #ffffff;
        letter-spacing: -1px;
        background-color: #555555;
        padding: 10px;
        border-radius: 5px;
        line-height: 100%;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & .script-top,
      & blockquote {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & .script-top,
      & blockquote {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & .script-top,
      & blockquote {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <div className='post-character-script' css={style}>
        <div className='script-top'>
          <img src={`/images/Characters/${image}.png`} alt={who} />
          <span>{who}</span>
        </div>
        <div className='script-bottom'>
          <blockquote className='script'>{children}</blockquote>
        </div>
      </div>
    </>
  );
};

Char.propTypes = {
  children: PropTypes.node,
  who: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  image: PropTypes.string,
};
