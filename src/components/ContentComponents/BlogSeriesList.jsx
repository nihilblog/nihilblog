import React, { useState, useCallback } from 'react';
import { Strong, A, Gray, Details, P } from '@/components/PostComponents';
import { css } from '@emotion/react';
import size from '@/data/size';
import { Box } from '@/components/LayoutComponensts';

export const BlogSeriesList = () => {
  const [ title, setTitle, ]= useState('열기');
  
  const style = css`
    transition: all 0.3s;
    font-weight: 500;
    letter-spacing: -1px;
    
    & > summary {
      background-color: #555555;
      padding: 10px;
      border-radius: 10px;
      color: #cccccc;
      font-weight: 900;
      letter-spacing: -1px;
      transition: all 0.3s;
      width: 100%;
      box-sizing: border-box;
      user-select: none;
      outline: none;
      cursor: pointer;
      
      &:hover {
        background-color: #333333;
        color: #ffffff;
      }

      @media (min-width: 1px) and (max-width: 600px) {
        font-size: ${size[4]};
      }

      @media (min-width: 601px) and (max-width: 800px) {
        font-size: ${size[5]};
      }

      @media (min-width: 801px) {
        font-size: ${size[6]};
      }

      &::-webkit-details-marker {
        display: none;
      }

      &:before {
        content: '\\f15c';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free', sans-serif;
        margin-right: 10px;
      }
    }
  `;
  
  const onClickTitle = useCallback(() => {
    if (title === '열기') {
      setTitle('닫기');
    } else {
      setTitle('열기');
    }
  }, [ title, ]);
  
  return (
    <>
      <Box bottom='100'>
        <details css={style}>
          <summary onClick={onClickTitle}>포스트 모음 {title}</summary>
          <div>
            <P>이 블로그는 가이드를 많이 다룹니다. 이 가이드들은 시리즈물로 작성이 되고 하나의 가이드를 작성하기 시작하면 그 가이드의 시리즈 포스트들을 순서대로 확인할 수 있게끔 링크를 모아놓은 가이드 모음을 작성하고 있습니다. 아래에는 그 가이드 모음을 나열해두었습니다. 가이드 뿐만 아니라 리뷰나 게임 플레이도 찾아보기 쉽게 나열해 둘 것이기 때문에 구경해보시면 좋겠습니다.</P>
            <P>모음을 확인하고 싶으시면 아래 중에서 원하는 <Strong>모음 열기</Strong>를 클릭하면 펼쳐집니다. 인터넷 익스플로러의 경우에는 어떻게 보일 지 모릅니다.</P>
            <P><Gray>※ 링크가 회색일 경우 아직 준비중인 링크이므로 확인하실 수 없습니다.</Gray></P>
  
            {/* 가이드 시리즈 */}
            <Details close='가이드 모음 열기' open='가이드 모음 닫기' bottom='20' top='20'>
              <A type={'blog'} href={'/post/2021-05-02-01-complete-html-guide'}>HTML 가이드</A>
              <A type={'blog'} href={'/post/2021-05-02-03-complete-css-guide'} isOff={'true'}>CSS 가이드</A>
            </Details>
  
            {/* 리뷰 시리즈 */}
            <Details close='리뷰 모음 열기' open='리뷰 모음 닫기' bottom='20' top='20'>
              아직 시리즈가 없습니다.
            </Details>
  
            {/* 게임 플레이 시리즈 */}
            <Details close='게임 플레이 모음 열기' open='게임 플레이 모음 닫기' bottom='0' top='20'>
              아직 시리즈가 없습니다.
            </Details>
          </div>
        </details>
      </Box>
    </>
  );
};