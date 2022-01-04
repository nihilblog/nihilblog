import React from 'react';
import { A, Message, Strong } from '@/components/Post';

export const ProgrammingGuideMessage = () => (
  <>
    <Message color='b'>
      <p>
        <Strong>개발을 위한 프로그래밍 지식</Strong>시리즈는 프로그래밍 공부를 하기에 앞서 알아서 나쁠 것 없는 정보들을 먼저 접하는 것으로부터 구상했습니다. 컴퓨터와 프로그래밍의 역사를 들여다보고 인터넷과 웹의 역사를 들여다보는 것이 목적입니다. 시리즈의 포스트를 모아둔 글은 <A href='/post/2021-05-02-02-complete-programming-knowledge' type='blog'>이 링크</A>로 넘어가시면 됩니다.
      </p>
    </Message>
  </>
);
