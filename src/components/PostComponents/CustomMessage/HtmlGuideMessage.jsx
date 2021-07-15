import React from 'react';
import { A, Message, Strong } from '@/components/PostComponents';

export const HtmlGuideMessage = () => {
  return (
    <>
      <Message color={ 'blue' }>
        <p><Strong>웹 개발을 위한 HTML 가이드</Strong>는 HTML을 모르는 분들이 HTML의 기능들에 대해서 배우고 웹 페이지의 뼈대를 구성할 수 있게 도와주는 시리즈 입니다. 순수하게 강의 목적만 있는 것은 아니며 제가 다시 처음부터 공부한다는 생각으로 조사하고 복습하는 느낌으로 작성하고 있습니다. 가이드를 모아놓은 포스트는 <A type={ 'blog' } href={ '/post/2021-05-02-01-complete-html-guide' }>이 링크</A>로 넘어가시면 됩니다.</p>
      </Message>
    </>
  );
};