import { css } from '@emotion/react';
import { size } from '@/data';

export interface IMessageStyle {
  color: string[];
  word: string;
}

export const useMessageStyle = (top: string, bottom: string, colorType: IMessageStyle) => {
  return css`
    padding: 10px;
    border-radius: 10px;
    margin: ${top}px 0 ${bottom}px 0;
    font-size: 90%;
    background-color: ${colorType.color[0]};
    color: ${colorType.color[1]};
    border: 2px solid ${colorType.color[2]};

    & > .message-title {
      text-align: left;
      margin-bottom: 10px;
      letter-spacing: -1px;
      color: ${colorType.color[1]};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      line-height: 1;

      & > svg {
        fill: ${colorType.color[1]};
        margin-right: 5px;
      }

      & > span {
        font-weight: 900;
        color: ${colorType.color[1]};
        font-size: 130%;
      }
    }

    & > .message-content {
      color: ${colorType.color[1]};

      & > p {
        font-weight: 500;
        text-align: justify;
        letter-spacing: -1px;
        text-indent: 10px;
        color: ${colorType.color[1]};
        line-height: 1.6;
        margin: 20px 0;

        &:nth-of-type(1) {
          margin-top: 0;
        }

        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }

        & > strong {
          color: ${colorType.color[1]};
        }

        & > a {
          color: ${colorType.color[1]};
          background-color: ${colorType.color[1]}35;

          &:hover {
            color: #ffffff;
            background-color: ${colorType.color[1]};

            & > svg {
              fill: #ffffff;
            }
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & p span,
      & p {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p span,
      & p {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & p span,
      & p {
        font-size: ${size[3]};
      }
    }
  `;
};
