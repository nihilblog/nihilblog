import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const A = ({ children, href = '', type = 'blog', isOff = 'false', }) => {
  const typeColor = {
    'blog': '#3f91ff',
    'normal': '#11b32c',
    'youtube': '#c30505',
  };
  
  const typeProps = {
    'blog': {
      href,
      rel: 'noreferrer noopener',
      target: '_self',
    },
    'normal': {
      href,
      rel: 'noreferrer noopener',
      target: '_blank',
    },
    'youtube': {
      href,
      rel: 'noreferrer noopener',
      target: '_blank',
    },
  };
  
  const icon = {
    'blog': {
      code: 'f0c1',
      type: 'Free',
    },
    'normal': {
      code: 'f360',
      type: 'Free',
    },
    'youtube': {
      code: 'f167',
      type: 'Brands',
    },
  };
  
  const color = {
    'false': `
      color: ${typeColor[type]};
      background-color: ${typeColor[type]}30;
    `,
    'true': `
      color: #aaaaaa;
      background-color: #88888830;
    `,
  };
  
  const cursor = {
    'false': 'pointer',
    'true': 'default',
  };
  
  const hover = {
    'false': `
      &:hover {
        color: #ffffff;
        background-color: ${typeColor[type]};
        transition: all 0.3s;
      }
    `,
    'true': ``,
  };

  const style = css`
    ${color[isOff]}
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 90%;
    transition: all 0.3s;
    margin: 0 2px;
    cursor: ${cursor[isOff]};

    &:after {
      content: '\\${icon[type].code}';
      font-family: 'Font Awesome 5 ${icon[type].type}', sans-serif;
      font-weight: 900;
      margin-left: 5px;
    }

    ${hover[isOff]}
  `;

  return (
    <>
      {
        type === 'blog'
          ?
          isOff === 'true'
            ?
            (<span css={style}>{children}</span>)
            :
            (<Link {...typeProps[type]} passHref>
              <a css={style}>{children}</a>
            </Link>)
          :
          (<a css={style} {...typeProps[type]}>{children}</a>)
      }
    </>
  );
};

A.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.string,
  isOff: PropTypes.string,
};