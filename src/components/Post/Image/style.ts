import { css } from '@emotion/react';
import { size } from '@/data';

export const useImageStyle = (top: string, bottom: string) => {
  return css`
    max-width: 940px;
    box-sizing: border-box;
    margin: ${top}px auto ${bottom}px auto;
    display: block;
    background-color: #33333310;
    border: 2px solid #33333330;
    padding: 10px;
    border-radius: 10px;

    & > a {
      border: 2px solid #33333350;
      background-color: #ffffff;
      color: #333333;
      padding: 10px;
      margin: 20px auto 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      width: 40%;
      border-radius: 5px;
      line-height: 1;

      & > span {
        font-size: 90%;
        color: inherit;
      }

      & > svg {
        fill: #333333;
        margin-right: 10px;
      }

      &:hover {
        background-color: #333333;
        color: #ffffff;
        border: 2px solid #333333;

        & > svg {
          fill: #ffffff;
        }
      }
    }

    & > div {
      & > img {
        margin: 0 auto;
        max-width: 100%;
        display: block;
        border-radius: 10px;
        border: 5px solid #333333;
        box-sizing: border-box;
      }
    }

    & > figcaption {
      margin-top: 10px;
      text-align: center;
      font-style: italic;
      color: #333333;
      letter-spacing: -1px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      line-height: 1;

      & > span {
        font-size: 90%;
        color: inherit;
      }

      & > svg {
        fill: #333333;
        margin-right: 5px;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & figcaption,
      & a {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & figcaption,
      & a {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & figcaption,
      & a {
        font-size: ${size[3]};
      }
    }
  `;
};
