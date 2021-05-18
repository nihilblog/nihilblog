import Document, { Html, Head, Main, NextScript } from 'next/document';

const AppDocument = () => {
  return (
    <Html lang='ko'>
      <Head>
        <script
          data-ad-client={'ca-pub-9256396675875954'}
          async src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}
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