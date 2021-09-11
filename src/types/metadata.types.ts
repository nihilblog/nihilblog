import { IBlogConfig } from './index';

export interface ISiteData {
  pageName?: string;
  pageDescription?: string;
  pageKeywords?: string;
  pageImage?: string;
  pageType?: string;
  pageURL?: string;
  pageTag?: string;
  pageSection?: string;
  pageCreated?: string;
  pageUpdated?: string;
}

export interface ISiteHead {
  BlogConfig: IBlogConfig;
  pageProps: ISiteData;
}
