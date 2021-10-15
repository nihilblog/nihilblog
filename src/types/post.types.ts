import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  id: number;
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

export interface IPosts {
  frontMatter: IFrontMatter;
  filePath: string;
  fullPath: string;
  content: string;
  yearMonth: string;
}

export type IPostString = ('post' | 'notice' | 'illust' | 'view');

export type ITCKString = ('tags' | 'categories' | 'keywords');

export interface IPostSlug {
  frontMatter: IFrontMatter;
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  slug: string;
}

export interface ITCKObj {
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
  tag?: string;
  post?: IPostSlug;
  notice?: IPostSlug;
  illust?: IPostSlug;
  prev?: IPosts;
  next?: IPosts;
}

export interface IPostTCKPage {
  categories?: ITCKObj[];
  keywords?: ITCKObj[];
  tags?: ITCKObj[];
}

export interface IPostTCK {
  category?: string;
  keyword?: string;
  tag?: string;
  PostsPages: IPosts[][];
}

export interface IPost {
  illust?: IPostSlug;
  notice?: IPostSlug;
  post?: IPostSlug;
  prev: IPosts;
  next: IPosts;
}

export interface IPostsPage {
  currentPage: number;
  prevPage: number;
  nextPage: number;
  posts?: IPosts[];
  notices?: IPosts[];
  illusts?: IPosts[];
  totalPages: number;
  PostsPages: IPosts[][];
}

export interface IBlogIndexPage {
  posts: IPosts[];
  notices: IPosts[];
}

export interface IPostArchive {
  archivePosts: IArchive[];
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
  type?: IPostString;
}

export interface IArchive {
  yearMonth: string;
  posts: IPosts[];
}
