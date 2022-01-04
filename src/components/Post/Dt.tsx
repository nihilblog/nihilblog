import React from 'react';
import { css } from '@emotion/react';
import { FaCommentAlt } from 'react-icons/fa';
import { size } from '@/data';

interface IDt {
  children: React.ReactNode;
}

export const Dt = ({ children, }: IDt) => {
  const DtStyle = css`
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    background-color: #555555;
    color: #ffffff;
    text-align: justify;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    line-height: 1;

    & > svg {
      fill: #ffffff;
      margin-right: 5px;
    }

    & > span {
      color: inherit;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[2]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[3]};
    }

    @media (min-width: 801px) {
      font-size: ${size[4]};
    }
  `;

  return (
    <>
      <dt css={DtStyle}>
        <FaCommentAlt />
        <span>{children}</span>
      </dt>
    </>
  );
};
