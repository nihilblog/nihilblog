import React from 'react';
import Head from 'next/head';

const SiteHead = ({ title, pageName, }) => {
  return (
    <>
      <Head>
        <title>{pageName} - {title}</title>
      </Head>
    </>
  );
};

export default SiteHead;