import React from 'react';
import BlogLayout from '@/layouts/BlogLayout';
import { Box, BoxHeader } from '@/components/LayoutComponensts';
import {
  A,
  Bold, Char,
  Code, Dl, Em, Gray, H,
  Kbd,
  Line,
  Mark,
  Message,
  Name,
  NoteBottom,
  NoteTop, Ol,
  P, Q, Quote, Score,
  Spoiler, Strike,
  Strong, Ul, Youtube
} from '@/components/PostComponents';

const PostTemplatePage = () => {
  const siteData = {
    pageName: '포스트 서식 관리',
    pageURL: '/post-template',
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <Box top='100'>
          <BoxHeader i='f013' w='900' f='Free'>포스트 서식 관리</BoxHeader>
          <P bottom='0'>모든 포스트 서식을 편하게 살펴보기 위한 페이지.</P>
        </Box>
        <Box bottom='100'>
          <H top='0' type='1'>제목입니다.</H>
          <H type='2'>제목입니다.</H>
          <H type='3'>제목입니다.</H>
          <H type='4'>제목입니다.</H>
          <P>문단입니다.</P>
          <P><Bold>굵은 글씨입니다.</Bold></P>
          <P><Strong>중요한 내용 강조입니다.</Strong></P>
          <P><Mark>관련 내용 강조입니다.</Mark></P>
          <P><Code>문단 중 키워드 입니다.</Code></P>
          <P><Kbd>키보드 입력 요소입니다.</Kbd></P>
          <P><A href='#' type='blog'>내부 링크 입니다.</A></P>
          <P><A href='#' type='normal'>외부 링크 입니다.</A></P>
          <P><A href='#' type='youtube'>유튜브 링크 입니다.</A></P>
          <P><Spoiler>문단 중 스포일러</Spoiler>입니다.</P>
          <P><Gray>회색 글씨입니다.</Gray></P>
          <P><Em>기울임 강조입니다.</Em></P>
          <P><Strike>취소선 그어진 글씨입니다.</Strike></P>
          <P><Name>파일 이름 입니다.</Name></P>

          <P>각주입니다.<NoteTop number='1' /></P>

          <NoteBottom number='1' first='true'>여기에 각주 내용이 들어갑니다.</NoteBottom>

          <Line />

          <P>문단 중 <Q>인용 요소입니다.</Q></P>
          <Quote who='누군가'>블럭 인용입니다.</Quote>
          <Char who='누군가' image='기본'>
            캐릭터 대사입니다.
          </Char>

          <Line />

          <Ul>
            <li>항목 1</li>
            <li>
              항목 2
              <ul>
                <li>항목 2.1</li>
                <li>항목 2.2</li>
              </ul>
            </li>
          </Ul>
          <Ol>
            <li>항목 1</li>
            <li>
              항목 2
              <ol>
                <li>항목 2.1</li>
                <li>항목 2.2</li>
              </ol>
            </li>
          </Ol>
          <Dl>
            <dt>항목 이름</dt>
            <dd>항목 설명</dd>
          </Dl>

          <Line />

          <Message color='b'>
            <p><Strong>안내</Strong> 메시지입니다. <A href='#' type='blog'>내부 링크 입니다.</A> <A href='#' type='normal'>외부 링크 입니다.</A></p>
          </Message>
          <Message color='g'>
            <p><Strong>정보</Strong> 메시지입니다. <A href='#' type='blog'>내부 링크 입니다.</A> <A href='#' type='normal'>외부 링크 입니다.</A></p>
          </Message>
          <Message color='r'>
            <p><Strong>위험</Strong> 메시지입니다. <A href='#' type='blog'>내부 링크 입니다.</A> <A href='#' type='normal'>외부 링크 입니다.</A></p>
          </Message>
          <Message color='y'>
            <p><Strong>주의</Strong> 메시지입니다. <A href='#' type='blog'>내부 링크 입니다.</A> <A href='#' type='normal'>외부 링크 입니다.</A></p>
          </Message>

          <Line />

          <Youtube src='https://www.youtube.com/watch?v=bwLNlAIDZfg'>아이유 - 코인</Youtube>

          <Line />

          <Score score='4.5' bottom='0'>점수</Score>
        </Box>
      </BlogLayout>
    </>
  );
};

export default PostTemplatePage;
