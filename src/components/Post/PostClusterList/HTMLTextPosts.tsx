import React from 'react';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { A, H, Ul } from '@/components/Post';

export const HTMLTextPosts = () => {
  const router = useRouter();

  const Links = [
    {
      href: '/post/2021-10-30-31-text-bold-and-italic-tags',
      text: '굵기와 기울기 태그(b, strong, i, em)',
    },
    {
      href: '/post/2021-11-12-32-br-and-hr-tag',
      text: '개행과 가로줄 태그(br, hr)',
    },
    {
      href: '/post/2021-11-15-33-sub-and-sup-tag',
      text: '윗첨자와 아랫첨자 태그(sup, sub)',
    },
    {
      href: '/post/2021-11-17-34-ins-and-del-tag',
      text: '텍스트의 추가, 제외 태그(ins, del)',
    },
    {
      href: '/post/2021-11-26-35-u-and-s-tag',
      text: '취소선(s)과 밑줄 표현',
    },
    {
      href: '/post/2021-12-30-36-q-and-blockquote-tag',
      text: '인용 태그(q, blockquote)',
    },
    {
      href: '/post/2022-01-10-37-mark-tag',
      text: '하이라이트 태그(mark)',
    },
    {
      href: '/post/2022-01-11-38-small-tag',
      text: 'small 태그',
    },
  ];

  const Texts = [
    'code, pre 태그',
    'abbr 태그',
    '그 외의 텍스트 태그들',
  ];

  const nowPostStyle = css`
    font-size: 90%;
    margin: 0 4px;
    background-color: #666666;
    color: #ffffff;
    padding: 0 7px;
    border-radius: 5px;

    &:before {
      content: '\\f30a';
      font-weight: 900;
      margin-right: 5px;
      font-family: 'Font Awesome 5 Free', sans-serif;
    }
  `;

  return (
    <>
      <H type='1'>텍스트 관련 태그</H>
      <Ul>
        {Links.map((item) => (
          <li key={uuid()}>
            <A href={item.href} type='blog'>{item.text}</A>
            {router.asPath === item.href && (
              <span css={nowPostStyle}>현재 글</span>
            )}
          </li>
        ))}
        {Texts.map((item) => (
          <li key={uuid()}>{item}</li>
        ))}
      </Ul>
    </>
  );
};
