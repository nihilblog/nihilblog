import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogConfig from '@/data/blog.config';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';

const App = ({ Component, pageProps, }) => {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events, ]);
  
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />

        <link rel='shortcut icon' type='image/x-icon' href={`${BlogConfig.siteURL}/favicon.ico`} />
        <link rel='icon' type='image/x-icon' href={`${BlogConfig.siteURL}/favicon.ico`} />

        <link
          rel='stylesheet'
          href={'https://use.fontawesome.com/releases/v5.15.1/css/all.css'}
          integrity={'sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp'}
          crossOrigin='anonymous'
        />

        <meta name='robots' content='All' />
        <meta name='robots' content='index, follow' />
        <meta name='NaverBot' content='All'/>
        <meta name='NaverBot' content='index, follow'/>
        <meta name='Yeti' content='All'/>
        <meta name='Yeti' content='index, follow'/>

        <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
        <meta name='naver-site-verification' content='f01c4552dd70d2dbfddcc7400b30371edf57a16d' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;