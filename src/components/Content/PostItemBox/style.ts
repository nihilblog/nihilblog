import { css } from '@emotion/react';
import { size } from '@/data';

export const style = css`
    padding: 10px;
    box-shadow: 0 0 10px -4px #333333;
    margin: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > div {
      &:nth-of-type(1) {
        & > img {
          display: block;
          border-radius: 5px;
          border: 2px solid #333333;
          box-sizing: border-box;
        }
      }

      &:nth-of-type(2) {
        flex: 1;

        & > h2 {
          margin-bottom: 10px;

          & > a {
            display: block;
            color: #555555;
            text-align: justify;
            font-weight: 900;
            background-color: #33333330;
            padding: 5px 10px;
            border-radius: 5px;
            letter-spacing: -1px;

            &:hover {
              color: #ffffff;
              background-color: #333333;
            }
          }
        }

        & > p {
          &:nth-of-type(1) {
            text-align: justify;
            color: #333333;
            margin-bottom: 10px;
            line-height: 1.55;
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 4;
            letter-spacing: -1px;

            & > span {
              font-size: 90%;
            }
          }

          &:nth-of-type(2) {
            line-height: 1;

            & > .category {
              padding: 5px 10px;
              background-color: #33333330;
              color: #555555;
              border-radius: 5px;
              margin-right: 5px;
              letter-spacing: -1px;
              line-height: 1;
              display: inline-flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;

              & > svg {
                margin-right: 5px;
                fill: #555555;
              }

              &:hover {
                background-color: #333333;
                color: #ffffff;

                & > svg {
                  fill: #ffffff;
                }
              }

              &:nth-last-of-type(1) {
                margin-right: 0;
              }
            }
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      flex-direction: column;

      & > div {
        &:nth-of-type(1) {
          margin-bottom: 10px;

          & > img {
            width: 100%;
          }
        }

        &:nth-of-type(2) {
          & > h2 {
            font-size: ${size[3]};
          }

          & > p {
            font-size: ${size[1]};
          }
        }
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      flex-direction: row;

      & > div {
        &:nth-of-type(1) {
          margin-right: 20px;

          & > img {
            width: 185px;
          }
        }

        &:nth-of-type(2) {
          & > h2 {
            font-size: ${size[4]};
          }

          & > p {
            font-size: ${size[2]};
          }
        }
      }
    }

    @media (min-width: 801px) {
      flex-direction: row;

      & > div {
        &:nth-of-type(1) {
          margin-right: 20px;

          & > img {
            width: 210px;
          }
        }

        &:nth-of-type(2) {
          & > h2 {
            font-size: ${size[5]};
          }

          & > p {
            font-size: ${size[3]};
          }
        }
      }
    }
  `;
