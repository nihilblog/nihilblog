import React from 'react';
import { css } from '@emotion/react';
import { size } from '@/data';

interface InfoPProps {
  top?: string;
  bottom?: string;
  children?: React.ReactNode;
}

export const InfoP = ({ top, bottom, children, }: InfoPProps) => {
  const InfoPStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    letter-spacing: -1px;
    line-height: 1;
    font-weight: 500;
    text-align: justify;

    & > span {
      background-color: #333333;
      color: #ffffff;
      padding: 5px 10px;
      display: inline-block;
      border-radius: 5px;
      margin-right: 10px;
    }

    & > a{
      background-color: #33333330;
      color: #555555;
      padding: 5px 10px;
      margin-right: 5px;
      margin-bottom: 5px;
      border-radius: 5px;
      display: inline-flex;
      flex-direction: row;
      line-height: 1;
      align-items: center;
      justify-content: center;

      & > svg {
        margin-right: 5px;
        fill: #555555;
      }

      & > strong {
        font-weight: 500;
        color: inherit;
      }

      &:hover {
        color: #ffffff;
        background-color: #333333;

        & > svg {
          fill: #ffffff;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
    }
    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
    }
    @media (min-width: 801px) {
      font-size: ${size[3]};
    }
  `;

  return (
    <p css={InfoPStyle}>{children}</p>
  );
};
