import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import size from '@/data/size';

export const H = ({
  children, top = '60', bottom = '60', type = '1',
}) => {
  const typePadding = {};
  let heading;

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
      typePadding.backColor = '#444444';
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
      typePadding.backColor = '#555555';
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
      typePadding.backColor = '#666666';
      typePadding.textColor = '#ffffff';
      typePadding.spanSize = 60;
      typePadding.media = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    default:
  }

  const style = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: ${typePadding.textColor};
    background-color: ${typePadding.backColor};
    padding: ${typePadding.topDown}px 10px;
    border-radius: 10px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 100%;

    & > span {
      font-size: ${typePadding.spanSize}%;
      color: inherit;
      font-weight: 900;

      &:before {
        content: '\\f27a';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 10px;
      }

      & > a {
        color: #ffffff30;
        margin-left: 10px;
        scroll-behavior: smooth;

        &:before {
          content: '\\f0c1';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
        }

        &:hover {
          color: #ffffff;
        }
      }
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

  switch (type) {
    case '1':
      heading = (
        <h2 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h2>
      );
      break;
    case '2':
      heading = (
        <h3 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h3>
      );
      break;
    case '3':
      heading = (
        <h4 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h4>
      );
      break;
    case '4':
      heading = (
        <h5 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h5>
      );
      break;
    default:
  }

  return (
    <>
      {heading}
    </>
  );
};

H.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string,
  bottom: PropTypes.string,
  type: PropTypes.string,
};
