import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import size from '@/data/size.data';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
  type?: ('1' | '2' | '3' | '4');
}

interface HeadingType {
  topDown?: number;
  backColor?: string;
  textColor?: string;
  spanSize?: number;
  fontSize?: string[];
}

export const H = ({
  children, top = '60', bottom = '60', type = '1',
}: Props) => {
  const headingType: HeadingType = {};
  let heading: React.ReactElement;

  switch (type) {
    case '1':
      headingType.topDown = 20;
      headingType.backColor = '#333333';
      headingType.textColor = '#ffffff';
      headingType.spanSize = 120;
      headingType.fontSize = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '2':
      headingType.topDown = 15;
      headingType.backColor = '#444444';
      headingType.textColor = '#ffffff';
      headingType.spanSize = 100;
      headingType.fontSize = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '3':
      headingType.topDown = 12;
      headingType.backColor = '#555555';
      headingType.textColor = '#ffffff';
      headingType.spanSize = 80;
      headingType.fontSize = [
        size[4],
        size[5],
        size[6],
      ];
      break;
    case '4':
      headingType.topDown = 8;
      headingType.backColor = '#666666';
      headingType.textColor = '#ffffff';
      headingType.spanSize = 60;
      headingType.fontSize = [
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
    color: ${headingType.textColor};
    background-color: ${headingType.backColor};
    padding: ${headingType.topDown}px 10px;
    border-radius: 10px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 100%;

    & > span {
      font-size: ${headingType.spanSize}%;
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
      font-size: ${headingType.fontSize[0]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${headingType.fontSize[1]};
    }

    @media (min-width: 801px) {
      font-size: ${headingType.fontSize[2]};
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
