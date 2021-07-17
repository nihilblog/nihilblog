import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActiveLink = ({ href, children, type = 'default', }) => {
  const router = useRouter();
  
  let className;
  
  switch (type) {
    case 'post':
      if (router.pathname.indexOf('post') !== -1) {
        className = 'selected';
      }
      break;
    case 'notice':
      if (router.pathname.indexOf('notice') !== -1) {
        className = 'selected';
      }
      break;
    case 'illust':
      if (router.pathname.indexOf('illust') !== -1) {
        className = 'selected';
      }
      break;
    case 'keywords':
      if (router.pathname.indexOf('illust/keywords') !== -1) {
        className = 'selected';
      }
      break;
    case 'categories':
      if (router.pathname.indexOf('categories') !== -1) {
        className = 'selected';
      }
      break;
    case 'tags':
      if (router.pathname.indexOf('tags') !== -1) {
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
};

export default ActiveLink;

ActiveLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.string,
};