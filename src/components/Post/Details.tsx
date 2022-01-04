import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { size } from '@/data';

interface Props {
  children?: React.ReactNode;
  close?: string;
  open?: string;
  top?: string;
  bottom?: string;
}

export const Details = ({
  children, close = '펼치기', open = '접기', top = '40', bottom = '40',
}: Props) => {
  const [ isOpen, setIsOpen, ] = useState(false);
  const [ title, setTitle, ] = useState(close);
  const [ icon, setIcon, ] = useState<React.ReactElement>(<FaPlusSquare />);

  const onCLickOpen = useCallback(() => {
    if (isOpen === false) {
      setIsOpen(true);
      setTitle(open);
      setIcon(<FaMinusSquare />);
    } else {
      setIsOpen(false);
      setTitle(close);
      setIcon(<FaPlusSquare />);
    }
  }, [ isOpen, title, ]);

  const DetailsStyle = css`
    margin: ${top}px 0 ${bottom}px 0;

    & > details {
      font-weight: 500;
      letter-spacing: -1px;
      color: #333333;
      margin-top: 20px;

      & > summary {
        outline: none;
        cursor: pointer;
        border: 2px solid #555555;
        border-radius: 10px;
        padding: 10px;
        color: #cccccc;
        background-color: #555555;
        user-select: none;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        & > svg {
          fill: #cccccc;
          margin-right: 10px;
        }

        &:hover {
          color: #ffffff;
          background-color: #333333;
          border: 2px solid #333333;

          & > svg {
            fill: #ffffff;
          }
        }
      }

      & > .series-list {
        border: 2px solid #333333;
        border-top: none;
        border-radius: 0 0 10px 10px;
        padding: 10px;
        background-color: #eeeeee50;

        & > p {
          line-height: 1.8;
        }
      }
    }

    & > details[open] {
      & > summary {
        border-radius: 10px 10px 0 0;
        border-color: #333333;
        background-color: #333333;
        color: #ffffff;

        & > svg {
          fill: #ffffff;
          margin-right: 10px;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > details > summary,
      & > details > .series-list > p {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > details > summary,
      & > details > .series-list > p {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & > details > summary,
      & > details > .series-list > p {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      <div className='post-details-block' css={DetailsStyle}>
        <details>
          <summary onClick={onCLickOpen}>{icon}{title}</summary>
          <div className='series-list'>
            <p>{children}</p>
          </div>
        </details>
      </div>
    </>
  );
};
