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
  const [ icon, setIcon, ] = useState<string[]>([]);
  const [ offObj, setOffObj, ] = useState({
    color: '',
    backgroundColor: '',
    cursor: '',
    hover: '',
  });
  const [ linkObj, setLinkObj, ] = useState({
    href,
    rel: '',
    target: '',
  });

  useEffect(() => {
    if (isOff === 'true') {
      setOffObj((prev) => ({
        ...prev,
        color: '#999999',
        backgroundColor: '#88888830',
        cursor: 'default',
        hover: '',
      }));
    } else if (isOff === 'false') {
      setOffObj((prev) => ({
        ...prev,
        color: getLinkColor(type)[0],
        backgroundColor: getLinkColor(type)[1],
        cursor: 'pointer',
        hover: `
          &:hover {
            color: #ffffff;
            background-color: ${getLinkColor(type)[0]};

            & > strong {
              color: #ffffff;
            }
          }
        `,
      }));

      if (type === 'blog') {
        setIcon([ 'f0c1', 'Free', ]);
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_self',
        }));
      } else if (type === 'normal') {
        setIcon([ 'f360', 'Free', ]);
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_blank',
        }));
      } else if (type === 'youtube') {
        setIcon([ 'f167', 'Brands', ]);
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_blank',
        }));
      }
    }
  }, [ type, isOff, ]);

  const style = css`
    color: ${offObj.color};
    background-color: ${offObj.backgroundColor};
    padding: 0 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
    cursor: ${offObj.cursor};

    &:after {
      content: '\\${icon[0]}';
      font-family: 'Font Awesome 5 ${icon[1]}', sans-serif;
      font-weight: 900;
      margin-left: 5px;
    }

    & > strong {
      color: ${offObj.color};
      font-weight: 900;
    }

    ${offObj.hover}
  `;

  return (
    <>
      {
        type === 'blog'
          ? isOff === 'true'
            ? (<span css={style}>{children}</span>)
            : (
              <Link {...linkObj} passHref>
                <a css={style}>{children}</a>
              </Link>
            )
          : (<a css={style} {...linkObj}>{children}</a>)
      }
    </>
  );
};
