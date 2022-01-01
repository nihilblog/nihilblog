import React from 'react';
import { IFrontMatter } from '@/types';
import { PostItemBox } from './PostItemBox';

interface Props {
  frontMatter: IFrontMatter;
  slug: string;
}

export const ArchiveItem = ({ frontMatter, slug, }: Props) => {
  return (
    <>
      <PostItemBox
        slug={slug}
        frontMatter={frontMatter}
        type={frontMatter.type}
      />
    </>
  );
};
