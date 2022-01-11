import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Kbd = ({ children, }: Props) => {
  const KbdStyle = css`
    padding: 2px 7px;
    color: #3f91ff;
    background-color: #3f91ff20;
    border-radius: 5px;
    font-weight: 900;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
    text-indent: 0;

    &:before {
      content: '\\f11c';
      font-family: 'Font Awesome 5 Free', sans-serif;
      font-weight: 900;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <kbd css={KbdStyle}>{children}</kbd>
    </>
  );
};
