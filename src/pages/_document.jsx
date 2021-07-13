import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const AppDocument = () => {
  return (
    <Html lang='ko'>
      <Head>
        <script
          data-ad-client={'ca-pub-9256396675875954'}
          async src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}
        />
        
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-P2RPQ0ZD3T' />
        
        <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-P2RPQ0ZD3T');
          `, }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

AppDocument.getInitialProps = Document.getInitialProps;
AppDocument.renderDocument = Document.renderDocument;

export default AppDocument;