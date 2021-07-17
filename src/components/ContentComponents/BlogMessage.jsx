import React from 'react';
import { A, P, Strong } from '@/components/PostComponents';
import { Box, BoxHeader } from '@/components/LayoutComponensts';

export const BlogMessage = () => {
  return (
    <>
      <Box top={'100'}>
        <BoxHeader i='f086' w='900' f='Free'>니힐로그에 오신 것을 환영합니다!</BoxHeader>
        <P bottom='0'>
          니힐로그는 프로그래밍, 일본어, 게임 관련된 컨텐츠를 다루는 블로그입니다. 이 블로그에 대한 자세한 소개는 <A href='/about' type='blog'>블로그 소개</A>페이지에서 하고 있습니다. <Strong>이 블로그의 컨텐츠들은 익스플로러에선 제대로 보이지 않을 수 있습니다.</Strong>
        </P>
      </Box>
    </>
  );
};