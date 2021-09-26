import React from 'react';
import { v4 as uuid } from 'uuid';
import { IArchive } from '@/types';
import { ArchiveItem } from './ArchiveItem';
import { Box, BoxHeader } from '.';

export const ArchiveBlock = ({ posts, yearMonth, }: IArchive) => (
  <>
    <Box>
      <BoxHeader w='900' f='Free' i='f187'>{yearMonth}</BoxHeader>
      {posts.map(({ frontMatter, fullPath, }) => (
        <ArchiveItem key={uuid()} frontMatter={frontMatter} fullPath={fullPath} />
      ))}
    </Box>
  </>
);
