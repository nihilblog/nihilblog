import React from 'react';
import { css } from '@emotion/react';

const PostInfo = ({ children, name, i, w, itemType = 'p', linkIcon = '', }) => {
  const itemTypeStyle = {
    'p': '',
    'link': `
      & > a {
        letter-spacing: -1px;
        color: #555555;
        padding: 0 5px;
        border-radius: 10px;
        border: 2px solid #555555;
        margin-right: 5px;
        margin-bottom: 3px;
        transition: all 0.3s;
        font-weight: 500;
        line-height: 1.8;

        &:hover {
          color: #ffffff;
          background-color: #333333;
          border: 2px solid #333333;
          transition: all 0.3s;
        }

        &:before {
          content: '\\${linkIcon}';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
          margin-right: 5px;
        }
      }
    `,
  };

  const itemTypeElement = {
    'p': <span className='content-paragraph'>{children}</span>,
    'link': <>{children}</>,
  };

  const postInfoStyle = css`
    margin-top: 2px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    transition: all 0.3s;
    
    & > span {
      &:nth-of-type(2) {
        color: #555555;
      }
    }
    
    & > .name {
      display: inline-block;
      border-radius: 10px;
      color: #f54747;
      font-weight: 900;
      margin-right: 10px;
      margin-bottom: 3px;
      margin-top: 2px;
      transition: all 0.3s;

      &:before {
        content: '\\${i}';
        font-weight: ${w};
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 5px;
      }
    }

    ${itemTypeStyle[itemType]}
  `;

  return (
    <>
      <p css={postInfoStyle}>
        <span className='name'>{name}</span>
        {itemTypeElement[itemType]}
      </p>
    </>
  );
};

export default PostInfo;