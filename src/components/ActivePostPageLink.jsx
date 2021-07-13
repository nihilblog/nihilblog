import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActivePostPageLink = ({ href, children, }) => {
  const router = useRouter();
  
  let className;
  if (router.pathname.indexOf('blog/post') !== -1) {
    className = 'selected';
  }
  
  return (
    <>
      <Link href={href}>{React.cloneElement(children, { className, })}</Link>
    </>
  );
};

export default ActivePostPageLink;

ActivePostPageLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};