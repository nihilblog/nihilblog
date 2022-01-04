import React from 'react';
import { css } from '@emotion/react';
import { FaKeyboard } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Kbd = ({ children, }: Props) => {
  const KbdStyle = css`
    padding: 5px 7px;
    color: #3f91ff;
    background-color: #3f91ff20;
    border-radius: 5px;
    font-weight: 900;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-indent: 0;

    & > svg {
      fill: #3f91ff;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <kbd css={KbdStyle}><FaKeyboard />{children}</kbd>
    </>
  );
};
