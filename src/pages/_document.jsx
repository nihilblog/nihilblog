import Document, { Html, Head, Main, NextScript } from 'next/document';

const AppDocument = () => {
  return (
    <Html lang='ko'>
      <Head />
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