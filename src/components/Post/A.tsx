import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import getLinkColor from '@/utils/getLinkColor';

interface Props {
  isOff?: ('true' | 'false');
  type?: ('blog' | 'normal' | 'youtube');
  href?: string;
  children?: React.ReactNode;
}

export const A = ({
  children, href, type = 'blog', isOff = 'false',
}: Props) => {
  const [ iconCode, setIconCode, ] = useState('');
  const [ iconWeight, setIconWeight, ] = useState('');
  const [ iconType, setIconType, ] = useState('');
  const [ offObj, setOffObj, ] = useState({
    color: '',
    backgroundColor: '',
    cursor: '',
  });
  const [ linkObj, setLinkObj, ] = useState({
    href,
    rel: '',
    target: '',
  });

  useEffect(() => {
    if (isOff === 'true') {
      setIconCode('f023');
      setIconType('Free');
      setIconWeight('900');
      setOffObj((prev) => ({
        ...prev,
        color: '#999999',
        backgroundColor: '#88888830',
        cursor: 'default',
      }));
    } else if (isOff === 'false') {
      setOffObj((prev) => ({
        ...prev,
        color: getLinkColor(type)[0],
        backgroundColor: getLinkColor(type)[1],
        cursor: 'pointer',
      }));

      if (type === 'blog') {
        setIconCode('f0c1');
        setIconType('Free');
        setIconWeight('900');
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_self',
        }));
      } else if (type === 'normal') {
        setIconCode('f360');
        setIconType('Free');
        setIconWeight('900');
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_blank',
        }));
      } else if (type === 'youtube') {
        setIconCode('f167');
        setIconType('Brands');
        setIconWeight('900');
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_blank',
        }));
      }
    }
  }, [ type, isOff, ]);

  const HoverStyle = isOff === 'false'
    ? css`
      &:hover {
        color: #ffffff;
        background-color: ${getLinkColor(type)[0]};

        & > strong {
          color: #ffffff;
        }
      }
    `
    : css``;

  const AStyle = css`
    color: ${offObj.color};
    background-color: ${offObj.backgroundColor};
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
    cursor: ${offObj.cursor};
    line-height: 1;
    text-indent: 0;

    &:after {
      content: '\\${iconCode}';
      margin-left: 5px;
      font-family: 'Font Awesome 5 ${iconType}', sans-serif;
      font-weight: ${iconWeight};
    }

    & > strong {
      color: ${offObj.color};
      font-weight: 900;
    }

    ${HoverStyle}
  `;

  return (
    <>
      {
        type === 'blog'
          ? isOff === 'true'
            ? (<span css={AStyle}>{children}</span>)
            : (
              <Link {...linkObj} passHref>
                <a css={AStyle}>{children}</a>
              </Link>
            )
          : (<a css={AStyle} {...linkObj}>{children}</a>)
      }
    </>
  );
};
