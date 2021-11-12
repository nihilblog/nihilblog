import React from 'react';
import { v4 as uuid } from 'uuid';
import { A, H, Ul } from '@/components/PostComponents';

export const HTMLTextPosts = () => {
  const Links = [
    {
      href: '/post/2021-10-30-31-text-bold-and-italic-tags',
      text: '굵기와 기울기 태그(b, strong, i, em)',
    },
    {
      href: '/post/2021-11-12-32-br-and-hr-tag',
      text: '개행과 가로줄 태그(br, hr)',
    },
  ];

  const Texts = [
    '윗첨자와 아랫첨자 태그(sup, sub)',
    '텍스트의 추가, 제외 태그(ins, del)',
    '취소선과 밑줄 태그(s, u)',
    '인용 태그(q, blockquote)',
    '하이라이트 태그(mark)',
    'small 태그',
    'code, pre 태그',
    'abbr 태그',
    '그 외의 텍스트 태그들',
  ];

  return (
    <>
      <H type='1'>텍스트 관련 태그</H>
      <Ul>
        {Links.map((item) => (
          <li key={uuid()}><A href={item.href} type='blog'>{item.text}</A></li>
        ))}
        {Texts.map((item) => (
          <li key={uuid()}>{item}</li>
        ))}
      </Ul>
    </>
  );
};
