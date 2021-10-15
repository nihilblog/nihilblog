import { IBlogConfig } from './index';

export interface ISiteData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
  tag?: string;
  section?: string;
  created?: string;
  updated?: string;
}

export interface ISiteHead {
  config: IBlogConfig;
  meta: ISiteData;
}
