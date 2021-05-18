import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveIllustKeywordPageLink = ({ href, children, }) => {
  const router = useRouter();
  
  let className;
  if (router.pathname.indexOf('blog/illust/keywords') !== -1) {
    className = 'selected';
  }
  
  return (
    <>
      <Link href={href}>{React.cloneElement(children, { className, })}</Link>
    </>
  );
};

export default ActiveIllustKeywordPageLink;