import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActiveIllustKeywordPageLink = ({ href, children, }) => {
  const router = useRouter();
  
  let className;
  if (router.pathname.indexOf('illust/keywords') !== -1) {
    className = 'selected';
  }
  
  return (
    <>
      <Link href={href}>{React.cloneElement(children, { className, })}</Link>
    </>
  );
};

export default ActiveIllustKeywordPageLink;

ActiveIllustKeywordPageLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};