import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/gtag';

const AppDocument = () => {
  return (
    <Html lang='ko'>
      <Head>
        <script
          data-ad-client={'ca-pub-9256396675875954'}
          async src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}
        />
        
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
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