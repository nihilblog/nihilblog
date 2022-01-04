import { css } from '@emotion/react';

interface IHStyle {
  topDown: number;
  backColor: string;
  textColor: string;
  spanSize: number;
  fontSize: string[];
}

export const useHStyle = (top: string, bottom: string, styleObj: IHStyle) => {
  return css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: ${styleObj.textColor};
    background-color: ${styleObj.backColor};
    padding: ${styleObj.topDown}px 10px;
    border-radius: 10px;
    letter-spacing: -1px;

    & > span {
      font-size: ${styleObj.spanSize}%;
      color: inherit;
      font-weight: 900;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      line-height: 1;

      & > svg {
        fill: ${styleObj.textColor};
        margin-right: 10px;
      }

      & > a {
        color: #ffffff30;
        margin-left: 20px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        & > svg {
          fill: #ffffff30;
        }

        &:hover {
          color: #ffffff;

          & > svg {
            fill: #ffffff;
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${styleObj.fontSize[0]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${styleObj.fontSize[1]};
    }

    @media (min-width: 801px) {
      font-size: ${styleObj.fontSize[2]};
    }
  `;
};
