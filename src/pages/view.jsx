import React from 'react';
import { css, Global } from '@emotion/react';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import BlogLayout from '@/layouts/BlogLayout';
import { Box, BoxHeader } from '@/components/LayoutComponensts';
import { P } from '@/components/PostComponents';
import size from '@/data/size';

const BlogPostManagerPage = ({ posts, }) => {
  const style = css`
    & > #post-list {
      margin-bottom: 100px;
      
      & > .post-item {
        margin: 30px 0;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px -4px #333333;
        
        & > h2 {
          & > span {
            letter-spacing: -1px;
            font-weight: 900;
          }
          
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
        
        & > p {
          margin-top: 10px;
          letter-spacing: -1px;
          color: #333333;
        }
        
        @media (min-width: 1px) and (max-width: 600px) {
          & > h2 {font-size: ${size[3]};}
          & > p {font-size: ${size[1]};}
        }

        @media (min-width: 601px) and (max-width: 800px) {
          & > h2 {font-size: ${size[4]};}
          & > p {font-size: ${size[2]};}
        }

        @media (min-width: 801px) {
          & > h2 {font-size: ${size[5]};}
          & > p {font-size: ${size[3]};}
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
  
  const siteData = {
    pageName: '포스트 관리',
    pageURL: '/view',
  };
  
  return (
    <>
      <Global styles={globalStyle} />
      <BlogLayout {...siteData}>
        <div css={style}>
          <Box top={'100'} bottom={'50'}>
            <BoxHeader i={'f039'} w={'900'} f={'Free'}>총 포스트 {posts.length}건</BoxHeader>
            <P bottom={'0'}>간단하게 포스트 제목과 주소를 볼 수 있게 만든 페이지.</P>
          </Box>
          <div id={'post-list'}>
            {posts.map(({ frontMatter, filePath, }, index) => (
              <div className={'post-item'} key={index}>
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
        </div>
      </BlogLayout>
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