import React from 'react';
import { css } from '@emotion/react';
import { FaCode } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Code = ({ children, }: Props) => {
  const CodeStyle = css`
    padding: 5px 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    color: #ffffff;
    font-size: 90%;
    background-color: #555555;
    margin: 0 2px;
    line-height: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > svg {
      fill: #ffffff;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <code css={CodeStyle}><FaCode />{children}</code>
    </>
  );
};
