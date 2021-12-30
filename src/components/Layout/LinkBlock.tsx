import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode,
  href?: string;
  type?: string;
}

export const LinkBlock = React.memo(({ href, children, type = 'default', }: Props) => {
  const router = useRouter();

  let className: string;

  switch (type) {
    case 'post':
      if (router.asPath.indexOf('post') !== -1) {
        className = 'selected';
      }
      break;
    case 'notice':
      if (router.asPath.indexOf('notice') !== -1) {
        className = 'selected';
      }
      break;
    case 'illust':
      if (router.asPath.indexOf('illust') !== -1) {
        className = 'selected';
      }
      break;
    case 'keywords':
      if (router.asPath.indexOf('illust/keywords') !== -1) {
        className = 'selected';
      }
      break;
    case 'categories':
      if (router.asPath.indexOf('categories') !== -1) {
        className = 'selected';
      }
      break;
    case 'tags':
      if (router.asPath.indexOf('tags') !== -1) {
        className = 'selected';
      }
      break;
    case 'view':
      if (router.asPath.indexOf('view/page') !== -1) {
        className = 'selected';
      }
      break;
    default:
      if (router.pathname === href) {
        className = 'selected';
      }
      break;
  }

  return (
    <>
      <Link href={href}><a className={className}>{children}</a></Link>
    </>
  );
});

LinkBlock.displayName = 'LinkBlock';
