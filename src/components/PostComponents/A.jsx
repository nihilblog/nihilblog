import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

export const A = ({ children, href = '', type = 'blog', }) => {
  let typeColor;
  const typeProps = {};
  const icon = {};

  if (type === 'blog') {
    typeColor = '#218cd8';
    typeProps.href = href;
    icon.code = 'f0c1';
    icon.type = 'Free';
  } else if (type === 'normal') {
    typeColor = '#11b32c';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f360';
    icon.type = 'Free';
  } else {
    typeColor = '#c30505';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f167';
    icon.type = 'Brands';
  }

  const style = css`
    border: 2px solid ${typeColor};
    color: ${typeColor};
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 90%;
    transition: all 0.3s;
    margin: 0px 2px;

    &:after {
      content: '\\${icon.code}';
      font-family: 'Font Awesome 5 ${icon.type}';
      font-weight: 900;
      margin-left: 5px;
    }

    &:hover {
      color: #ffffff;
      background-color: ${typeColor};
      transition: all 0.3s;
    }
  `;

  return (
    <>
      {
        type === 'blog'
          ? (
            <Link {...typeProps} passHref>
              <a css={style}>{children}</a>
            </Link>
          )
          : (
            <a css={style} {...typeProps}>{children}</a>
          )
      }
    </>
  );
};