import React from 'react';
import { Strong, A, Gray, Details, P } from '@/components/PostComponents';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';

const BlogSeriesList = () => {
  return (
    <>
      <Box bottom='100'>
        <BoxHeader i='f15c' f='Free' w='900'>시리즈 리스트</BoxHeader>
        <P>
          이 블로그는 컨셉상 가이드가 많습니다. 이 가이드들은 시리즈물로 작성됩니다. 하나의 가이드를 작성하기 시작하면 그 가이드의 시리즈 포스트들을 순서대로 확인할 수 있게끔 링크를 모아놓은 포스트를 작성합니다. 아래에는 그 정리된 포스트들을 나열합니다. <Strong>시리즈 열기</Strong>를 클릭하면 각 가이드의 정리 포스트 링크가 보입니다. <Gray>(익스플로러에선 어떻게 보일 지 모릅니다.)</Gray>
        </P>

        {/* 가이드 시리즈 */}
        <Details close='가이드 시리즈 열기' open='가이드 시리즈 닫기' bottom='20' top='20'>
          아직 시리즈가 없습니다.
        </Details>

        {/* 리뷰 시리즈 */}
        <Details close='리뷰 시리즈 열기' open='리뷰 시리즈 닫기' bottom='20' top='20'>
          아직 시리즈가 없습니다.
        </Details>

        {/* 게임 플레이 시리즈 */}
        <Details close='게임 플레이 시리즈 열기' open='게임 플레이 시리즈 닫기' bottom='0' top='20'>
          아직 시리즈가 없습니다.
        </Details>
      </Box>
    </>
  );
};

export default BlogSeriesList;