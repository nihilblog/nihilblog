import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  title: string;
  description: string;
  coverImage: string;
  tags?: string[];
  categories?: string[];
  createdAt: number;
  updatedAt: number;
  keywords?: string[];
  drawDate?: number;
  display: boolean;
  notice: boolean;
}

export interface IMatterData {
  title?: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  categories?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  keywords?: string[];
  drawDate?: Date;
  display?: boolean;
  notice?: boolean;
}

export interface IPosts {
  frontMatter: IFrontMatter;
  filePath: string;
  fullPath: string;
  content: string;
}

export type IPostType = ('post' | 'notice' | 'illust');

export type ITagsCategoriesKeywardsType = ('tags' | 'categories' | 'keywords');

export interface IPostSlug {
  frontMatter: IFrontMatter;
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  slug: string;
}

export interface ITagsCategoriesKeywards {
  tagName?: string;
  tagCount?: number;
  categoryName?: string;
  categoryCount?: number;
  keywordName?: string,
  keywordCount?: number;
}

export interface IPostsProps {
  posts?: IPosts[];
  notices?: IPosts[];
  illusts?: IPosts[];
  tags?: ITagsCategoriesKeywards[];
  categories?: ITagsCategoriesKeywards[];
  keywords?: ITagsCategoriesKeywards[];
  tag?: string;
  category?: string;
  keyword?: string;
  PostsPages?: IPosts[][];
  post?: IPostSlug;
  notice?: IPostSlug;
  illust?: IPostSlug;
  prev?: IPosts;
  next?: IPosts;
  prevPage?: number;
  nextPage?: number;
  currentPage?: number;
  totalPages?: number;
}

export interface IH5 {
  id: string;
  text: string;
  name: 'H5';
}

export interface IH4 {
  id: string;
  text: string;
  name: 'H4';
  items?: IH5[];
}

export interface IH3 {
  id: string;
  text: string;
  name: 'H3';
  items?: IH4[];
}

export interface IH2 {
  id: string;
  text: string;
  name: 'H2';
  items?: IH3[];
}

export interface IPrev {
  (): void;
}

export interface IFirst {
  (): void;
}

export interface INext {
  (): void;
}

export interface ILast {
  (): void;
}

export interface IPagination {
  prev?: IPrev;
  next?: INext;
  first?: IFirst;
  last?: ILast;
  current?: number;
  total?: number;
  top?: string;
  bottom?: string;
}

export interface IPostNav {
  prev?: IPosts;
  next?: IPosts;
  type?: IPostType;
}
