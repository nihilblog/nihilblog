import React from 'react';
import { css, Global } from '@emotion/react';
import Link from 'next/link';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import Head from 'next/head';

const BlogPostManagerPage = ({ posts, }) => {
  const style = css`
    padding: 10px;

    & > h1 {
      margin-bottom: 30px;
      color: #333333;
    }

    & > div {
      padding: 10px;
      border: 1px solid #333333;
      color: #333333;
      margin: 10px 0;

      & > h2 {
        & > .red {
          font-size: 80%;
          padding: 5px 10px;
          background-color: #b90c0c;
          color: #ffffff;
          display: inline-block;
          border-radius: 10px;
          margin-right: 10px;
        }

        & > .black {
          font-size: 80%;
          padding: 5px 10px;
          background-color: #333333;
          color: #ffffff;
          display: inline-block;
          border-radius: 10px;
          margin-right: 10px;
        }

        & > .count {
          margin-right: 5px;
        }
      }
    }
  `;

  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans CJK KR', sans-serif;
    }
  `;
  
  return (
    <>
      <Global styles={globalStyle} />
      <Head>
        <title>포스트 관리</title>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div css={style}>
        <Link href='/blog'><a>홈</a></Link>
        <h1>총 포스트 {posts.length}건</h1>
        {posts.map(({ frontMatter, filePath, }, index) => (
          <div key={index}>
            <h2>
              {
                frontMatter.notice
                  ?
                  (<>
                    <span className='count red'>{index + 1}</span>
                    <span className='red'>공지</span>
                  </>)
                  :
                  frontMatter.drawDate
                    ?
                    (<>
                      <span className='count black'>{index + 1}</span>
                      <span className='black'>일러스트</span>
                    </>)
                    :
                    (<>
                      <span className='count black'>{index + 1}</span>
                      <span className='black'>일반</span>
                    </>)
              }
              <span>{frontMatter.title}</span>
            </h2>
            <p>
              {
                frontMatter.notice
                  ?
                  `/blog/notice/${filePath.replace('.mdx', '')}`
                  :
                  frontMatter.drawDate
                    ?
                    `/blog/illust/${filePath.replace('.mdx', '')}`
                    :
                    `/blog/post/${filePath.replace('.mdx', '')}`
              }
            </p>
          </div>
        )).reverse()}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllYearPosts('post');
  const notices = getAllYearPosts('notice');
  const illusts = getAllYearIllusts('illust');

  const AllPosts = posts.concat(notices, illusts);
  const SortedAllPosts = AllPosts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return beforeDate - afterDate;
  });

  return {
    props: {
      posts: SortedAllPosts,
    },
  };
};

export default BlogPostManagerPage;