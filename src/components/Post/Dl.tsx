import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
}

export const Dl = ({ children, top = '40', bottom = '40', }: Props) => {
  const DlStyle = css`
    margin: ${top}px 0 ${bottom}px 0;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    padding: 0 10px;
  `;

  return (
    <>
      <dl className='post-description-list' css={DlStyle}>
        {children}
      </dl>
    </>
  );
};
