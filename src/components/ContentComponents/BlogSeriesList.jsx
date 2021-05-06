import React from 'react';
import { Strong, A, Gray, Details, P } from '@/components/PostComponents';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';

const BlogSeriesList = () => {
  return (
    <>
      <Box bottom='100'>
        <BoxHeader i='f15c' f='Free' w='900'>모음 포스트 안내</BoxHeader>
        <P>
          이 블로그는 가이드를 많이 다룹니다. 이 가이드들은 시리즈물로 작성이 되고 하나의 가이드를 작성하기 시작하면 그 가이드의 시리즈 포스트들을 순서대로 확인할 수 있게끔 링크를 모아놓은 가이드 모음을 작성하고 있습니다. 아래에는 그 가이드 모음을 나열해두었습니다. 가이드 뿐만 아니라 리뷰나 게임 플레이도 찾아보기 쉽게 나열해 둘 것이기 때문에 구경해보시면 좋겠습니다.
        </P>
        <P>
          아래의 모음들은 <Strong>모음 열기</Strong>를 클릭하면 열리게 됩니다. <Gray>(익스플로러에선 어떻게 보일 지 모릅니다.)</Gray>
        </P>

        {/* 가이드 시리즈 */}
        <Details close='가이드 모음 열기' open='가이드 모음 닫기' bottom='20' top='20'>
          <A type={'blog'} href={'/blog/post/2021-05-02-01-complete-html-guide'}>HTML 가이드</A>
          <A type={'blog'} href={'/blog/post/2021-05-02-03-complete-css-guide'} isOff={'true'}>CSS 가이드</A>
        </Details>

        {/* 리뷰 시리즈 */}
        <Details close='리뷰 모음 열기' open='리뷰 모음 닫기' bottom='20' top='20'>
          아직 시리즈가 없습니다.
        </Details>

        {/* 게임 플레이 시리즈 */}
        <Details close='게임 플레이 모음 열기' open='게임 플레이 모음 닫기' bottom='0' top='20'>
          아직 시리즈가 없습니다.
        </Details>
      </Box>
    </>
  );
};

export default BlogSeriesList;