import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import {
  FaExternalLinkSquareAlt, FaLink, FaLock, FaYoutube
} from 'react-icons/fa';
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
  const [ icon, setIcon, ] = useState<React.ReactElement>(null);
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
      setIcon(<FaLock />);
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
        setIcon(<FaLink />);
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_self',
        }));
      } else if (type === 'normal') {
        setIcon(<FaExternalLinkSquareAlt />);
        setLinkObj((prev) => ({
          ...prev,
          href,
          rel: 'noreferrer noopener',
          target: '_blank',
        }));
      } else if (type === 'youtube') {
        setIcon(<FaYoutube />);
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

        & > svg {
          fill: #ffffff;
        }

        & > strong {
          color: #ffffff;
        }
      }
    `
    : css``;

  const AStyle = css`
    color: ${offObj.color};
    background-color: ${offObj.backgroundColor};
    padding: 5px 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
    cursor: ${offObj.cursor};
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-indent: 0;

    & > svg {
      fill: ${offObj.color};
      margin-left: 5px;
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
            ? (<span css={AStyle}>{children}{icon}</span>)
            : (
              <Link {...linkObj} passHref>
                <a css={AStyle}>{children}{icon}</a>
              </Link>
            )
          : (<a css={AStyle} {...linkObj}>{children}{icon}</a>)
      }
    </>
  );
};
