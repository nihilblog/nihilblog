import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveNoticePageLink = ({ href, children, }) => {
  const router = useRouter();
  
  let className;
  if (router.pathname.indexOf('notice/page') !== -1) {
    className = 'selected';
  }
  
  return (
    <>
      <Link href={href}>{React.cloneElement(children, { className, })}</Link>
    </>
  );
};

export default ActiveNoticePageLink;