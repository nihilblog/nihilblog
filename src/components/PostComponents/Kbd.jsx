import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const Kbd = ({ children, }) => {
  const style = css`
    padding: 2px 7px;
    color: #3f91ff;
    background-color: #3f91ff30;
    border: 1px solid #3f91ff60;
    border-radius: 5px;
    font-weight: 900;
    font-size: 90%;
    margin: 0 2px;

    &:before {
      content: '\\f11c';
      font-weight: 900;
       font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <kbd css={style}>{children}</kbd>
    </>
  );
};

Kbd.propTypes = {
  children: PropTypes.node,
};