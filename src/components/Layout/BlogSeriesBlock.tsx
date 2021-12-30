import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { FaFileAlt } from 'react-icons/fa';
import {
  Strong, A, Gray, Details, P
} from '@/components/PostComponents';
import size from '@/data/size.data';
import { Box } from '@/components/Content/Box';

export const BlogSeriesBlock = React.memo(() => {
  const [ title, setTitle, ] = useState('열기');

  const BlogSeriesBlockStyle = css({
    fontWeight: 500,
    letterSpacing: '-1px',

    '& > summary': {
      backgroundColor: '#555555',
      padding: '15px 10px',
      borderRadius: '10px',
      color: '#cccccc',
      fontWeight: 900,
      letterSpacing: '-1px',
      width: '100%',
      boxSizing: 'border-box',
      userSelect: 'none',
      outline: 'none',
      cursor: 'pointer',
      listStyleType: 'none',
      lineHeight: '1',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',

      '& > svg': {
        fill: '#cccccc',
        marginRight: '10px',
      },

      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff',

        '& > svg': {
          fill: '#ffffff',
        },
      },

      '@media (min-width: 1px) and (max-width: 600px)': {
        fontSize: size[4],
      },
      '@media (min-width: 601px) and (max-width: 800px)': {
        fontSize: size[5],
      },
      '@media (min-width: 801px)': {
        fontSize: size[6],
      },
    },
  });

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
        <details css={BlogSeriesBlockStyle}>
          <summary onClick={onClickTitle}><FaFileAlt />포스트 모음 {title}</summary>
          <div>
            <P>이 블로그는 가이드를 많이 다룹니다. 이 가이드들은 시리즈물로 작성이 되고 하나의 가이드를 작성하기 시작하면 그 가이드의 시리즈 포스트들을 순서대로 확인할 수 있게끔 링크를 모아놓은 가이드 모음을 작성하고 있습니다. 아래에는 그 가이드 모음을 나열해두었습니다.</P>
            <P>모음을 확인하고 싶으시면 아래 중에서 원하는 <Strong>모음 열기</Strong>를 클릭하면 펼쳐집니다. 인터넷 익스플로러의 경우에는 어떻게 보일 지 모릅니다.</P>
            <P><Gray>※ 링크가 회색일 경우 아직 준비중인 링크이므로 확인하실 수 없습니다.</Gray></P>

            {/* 가이드 시리즈 */}
            <Details close='가이드 모음 열기' open='가이드 모음 닫기' bottom='0' top='20'>
              <A type='blog' href='/post/2021-05-02-02-complete-programming-knowledge'>
                개발을 위한 프로그래밍 지식
              </A>
              <A type='blog' href='/post/2021-05-02-01-complete-html-guide'>
                웹 개발을 위한 HTML 가이드
              </A>
              <A type='blog' href='/post/2021-05-02-03-complete-css-guide' isOff='true'>
                웹 개발을 위한 CSS 가이드
              </A>
            </Details>
          </div>
        </details>
      </Box>
    </>
  );
});

BlogSeriesBlock.displayName = 'BlogSeriesBlock';
