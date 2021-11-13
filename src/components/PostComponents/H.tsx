import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import size from '@/data/size.data';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
  type?: ('1' | '2' | '3' | '4');
}

interface HeadingType {
  topDown: number;
  backColor: string;
  textColor: string;
  spanSize: number;
  fontSize: string[];
}

export const H = ({
  children, top = '60', bottom = '60', type = '1',
}: Props) => {
  const [ headingType, setHeadingType, ] = useState<HeadingType>({
    topDown: 0,
    backColor: '',
    textColor: '',
    spanSize: 0,
    fontSize: [],
  });
  let heading: React.ReactElement;

  useEffect(() => {
    if (type === '1') {
      setHeadingType((prev) => ({
        ...prev,
        topDown: 20,
        backColor: '#333333',
        textColor: '#ffffff',
        spanSize: 120,
        fontSize: [ size[4], size[5], size[6], ],
      }));
    } else if (type === '2') {
      setHeadingType((prev) => ({
        ...prev,
        topDown: 15,
        backColor: '#444444',
        textColor: '#ffffff',
        spanSize: 100,
        fontSize: [ size[4], size[5], size[6], ],
      }));
    } else if (type === '3') {
      setHeadingType((prev) => ({
        ...prev,
        topDown: 12,
        backColor: '#555555',
        textColor: '#ffffff',
        spanSize: 80,
        fontSize: [ size[4], size[5], size[6], ],
      }));
    } else if (type === '4') {
      setHeadingType((prev) => ({
        ...prev,
        topDown: 8,
        backColor: '#666666',
        textColor: '#ffffff',
        spanSize: 60,
        fontSize: [ size[4], size[5], size[6], ],
      }));
    }
  }, [ type, ]);

  const style = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: ${headingType.textColor};
    background-color: ${headingType.backColor};
    padding: ${headingType.topDown}px 10px;
    border-radius: 10px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    line-height: 100%;

    & > span {
      font-size: ${headingType.spanSize}%;
      color: inherit;
      font-weight: 900;

      &:before {
        content: '\\f27a';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 10px;
      }

      & > a {
        color: #ffffff30;
        margin-left: 10px;

        &:before {
          content: '\\f0c1';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
        }

        &:hover {
          color: #ffffff;
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${headingType.fontSize[0]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${headingType.fontSize[1]};
    }

    @media (min-width: 801px) {
      font-size: ${headingType.fontSize[2]};
    }
  `;

  switch (type) {
    case '1':
      heading = (
        <h2 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h2>
      );
      break;
    case '2':
      heading = (
        <h3 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h3>
      );
      break;
    case '3':
      heading = (
        <h4 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h4>
      );
      break;
    case '4':
      heading = (
        <h5 className={`post-heading h-${type}`} css={style}>
          <span>{children} <a href='#top' aria-label='top' /></span>
        </h5>
      );
      break;
    default:
  }

  return (
    <>
      {heading}
    </>
  );
};
