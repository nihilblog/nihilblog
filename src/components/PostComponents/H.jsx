import size from '@/data/size';
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

export const H = ({ children, top = '60', bottom = '60', type = '1', }) => {
  const typePadding = {};

  switch (type) {
    case '1':
      typePadding.topDown = 20;
      typePadding.backColor = '#333333';
      typePadding.textColor = '#ffffff';
      typePadding.spanSize = 120;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '2':
      typePadding.topDown = 15;
      typePadding.backColor = '#555555';
      typePadding.textColor = '#ffffff';
      typePadding.spanSize = 100;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '3':
      typePadding.topDown = 12;
      typePadding.backColor = '#777777';
      typePadding.textColor = '#ffffff';
      typePadding.spanSize = 80;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '4':
      typePadding.topDown = 8;
      typePadding.backColor = '#cccccc';
      typePadding.textColor = '#333333';
      typePadding.spanSize = 60;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
  }

  const style = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: ${typePadding.textColor};
    background-color: ${typePadding.backColor};
    padding: ${typePadding.topDown}px 10px;
    border-radius: 10px;
    transition: all 0.3s;
    letter-spacing: -1px;
    line-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${type === '4' ? 'border: 2px solid #33333390;' : ''}

    & > span {
      font-size: ${typePadding.spanSize}%;
      color: inherit;
      font-weight: 900;
    }

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 10px;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${typePadding.media[0]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${typePadding.media[1]};
    }

    @media (min-width: 801px) {
      font-size: ${typePadding.media[2]};
    }
  `;
  
  return (
    <>
      <h5 className={`post-heading-${type}`} css={style}>
        <span>{children}</span>
      </h5>
    </>
  );
};

H.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
  type: PropTypes.string,
};