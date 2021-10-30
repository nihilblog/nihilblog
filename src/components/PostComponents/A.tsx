import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

interface Props {
  isOff?: ('true' | 'false');
  type?: ('blog' | 'normal' | 'youtube');
  href?: string;
  children?: React.ReactNode;
}

export const A = ({
  children, href, type = 'blog', isOff = 'false',
}: Props) => {
  const typeOBJ = {
    blog: {
      color: '#3f91ff',
      backgroundColor: '#3f91ff30',
      iconCode: 'f0c1',
      iconType: 'Free',
    },
    normal: {
      color: '#11b32c',
      backgroundColor: '#11b32c30',
      iconCode: 'f360',
      iconType: 'Free',
    },
    youtube: {
      color: '#c30505',
      backgroundColor: '#c3050530',
      iconCode: 'f167',
      iconType: 'Brands',
    },
  };

  const offOBJ = {
    false: {
      color: typeOBJ[type].color,
      backgroundColor: typeOBJ[type].backgroundColor,
      cursor: 'pointer',
      hover: `
        &:hover {
          color: #ffffff;
          background-color: ${typeOBJ[type].color};

          & > strong {
            color: #ffffff;
          }
        }
      `,
    },
    true: {
      color: '#999999',
      backgroundColor: '#88888830',
      cursor: 'default',
      hover: '',
    },
  };

  const linkProps = {
    blog: {
      href,
      rel: 'noreferrer noopener',
      target: '_self',
    },
    normal: {
      href,
      rel: 'noreferrer noopener',
      target: '_blank',
    },
    youtube: {
      href,
      rel: 'noreferrer noopener',
      target: '_blank',
    },
  };

  const style = css`
    color: ${offOBJ[isOff].color};
    background-color: ${offOBJ[isOff].backgroundColor};
    padding: 0 7px;
    border-radius: 5px;
    font-size: 90%;
    margin: 0 2px;
    cursor: ${offOBJ[isOff].cursor};

    &:after {
      content: '\\${typeOBJ[type].iconCode}';
      font-family: 'Font Awesome 5 ${typeOBJ[type].iconType}', sans-serif;
      font-weight: 900;
      margin-left: 5px;
    }

    & > strong {
      color: ${offOBJ[isOff].color};
      font-weight: 900;
    }

    ${offOBJ[isOff].hover}
  `;

  return (
    <>
      {
        type === 'blog'
          ? isOff === 'true'
            ? (<span css={style}>{children}</span>)
            : (
              <Link {...linkProps[type]} passHref>
                <a css={style}>{children}</a>
              </Link>
            )
          : (<a css={style} {...linkProps[type]}>{children}</a>)
      }
    </>
  );
};
