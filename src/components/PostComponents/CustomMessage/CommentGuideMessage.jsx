import React from 'react';
import { Message, Strong } from '@/components/PostComponents';

export const CommentGuideMessage = ({ postType, }) => {
  return (
    <>
      <Message color='blue' bottom='40'>
        {
          postType.includes('blog/illust')
            ? (<p>
              그림에 대한 궁금한 점이나 혹 커미션을 하고 싶으신 분들은 메일이나 인스타그램으로 연락을 주시면 빠르게 확인하고 이야기를 해보도록 하겠습니다. <Strong>하지만 지금은 타블렛이 제 기능을 할 수 없어서 커미션을 받을 수 없는 점 알립니다.</Strong>
            </p>)
            : (<p>
              포스트를 읽고 혹은 읽으면서 하고 싶은 말이 있다면 아래의 덧글창에 적어주시면 됩니다. 최대한 빠르게 확인하고 답변을 드리겠습니다. 이 포스트를 보신 모든 분들의 하루가 좋은 하루이길 바랍니다.
            </p>)
        }
      </Message>
    </>
  );
};