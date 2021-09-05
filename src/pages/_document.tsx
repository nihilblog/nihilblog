import React from 'react';
import Document, {
  Html, Head, Main, NextScript, DocumentContext
} from 'next/document';
import { gaTracrId } from '@/data/ga';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, };
  }

  addGoogleAnalyticsScript() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${gaTracrId}');
      `,
    };
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <script
            data-ad-client='ca-pub-9256396675875954'
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTracrId}`} />

          <script dangerouslySetInnerHTML={this.addGoogleAnalyticsScript()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
