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

  const AStyle = css(
    {
      color: offObj.color,
      backgroundColor: offObj.backgroundColor,
      padding: '5px 7px',
      borderRadius: '5px',
      fontSize: '90%',
      margin: '0 2px',
      cursor: offObj.cursor,
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      textIndent: '0',

      '& > svg': {
        fill: offObj.color,
        marginLeft: '5px',
      },

      '& > strong': {
        color: offObj.color,
        fontWeight: 900,
      },
    }, (
      isOff === 'false'
        ? {
          '&:hover': {
            color: '#ffffff',
            backgroundColor: getLinkColor(type)[0],

            '& > svg': {
              fill: '#ffffff',
            },

            '& > strong': {
              color: '#ffffff',
            },
          },
        }
        : {}
    )
  );

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
