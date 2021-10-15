import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import config from '@/data/config.data';
import { pageview } from '@/data/ga';

const App = ({ Component, pageProps, }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ Router.events, ]);

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' />

        <link rel='shortcut icon' type='image/x-icon' href={`${config.siteURL}/favicon.ico`} />
        <link rel='icon' type='image/x-icon' href={`${config.siteURL}/favicon.ico`} />

        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
        />

        <meta name='robots' content='All' />
        <meta name='robots' content='index, follow' />
        <meta name='NaverBot' content='All' />
        <meta name='NaverBot' content='index, follow' />
        <meta name='Yeti' content='All' />
        <meta name='Yeti' content='index, follow' />

        <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
        <meta name='naver-site-verification' content='31dbe436fb9ad06dc16459043f180273b2a9c12b' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
