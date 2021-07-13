import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActiveLink = ({ href, children, }) => {
  const router = useRouter();
  
  let className;
  if (router.pathname === href) {
    className = 'selected';
  }
  
  return (
    <>
      <Link href={href}>{React.cloneElement(children, { className, })}</Link>
    </>
  );
};

export default ActiveLink;

ActiveLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};