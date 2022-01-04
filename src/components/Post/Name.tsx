import React from 'react';
import { css } from '@emotion/react';
import { FaFileCode } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Name = ({ children, }: Props) => {
  const NameStyle = css`
    padding: 5px 7px;
    border-radius: 5px;
    font-weight: 500;
    text-indent: 0;
    font-size: 90%;
    margin: 0 2px;
    line-height: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #555555;

    & > svg {
      fill: #ffffff;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <span css={NameStyle}><FaFileCode />{children}</span>
    </>
  );
};
