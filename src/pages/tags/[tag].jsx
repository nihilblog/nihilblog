import React, { useCallback, useState } from 'react';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents/P';
import Link from 'next/link';
import getUTC9 from '@/utils/getUTC9';
import { css } from '@emotion/react';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blog.config';
import AlterPagination from '@/components/AlterPagination';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostContents, PostHeader } from '@/components/LayoutComponensts';
import PropTypes from 'prop-types';

const TagPostsPage = ({ tag, PostsPages, }) => {
  const [ postsIndex, setPostsIndex, ] = useState(0);
  
  const getCount = useCallback(() => {
    let length = 0;
    
    for (let i = 0; i <= PostsPages.length - 1; i++) {
      length += PostsPages[i].length;
    }
    
    return length;
  }, []);
  
  const totalCount = getCount();
  
  const onClickPrev = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(postsIndex - 1);
    }
  }, [ postsIndex, ]);
  
  const onClickNext = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(postsIndex + 1);
    }
  }, [ postsIndex, ]);
  
  const onClickFirst = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(0);
    }
  }, [ postsIndex, ]);
  
  const onClickLast = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(PostsPages.length - 1);
    }
  }, [ postsIndex, ]);
  
  const style = css`
    margin-bottom: 100px;
  `;

  const siteData = {
    pageName: `"${tag}" 관련 포스트`,
    pageURL: `/tags/${tag}`,
  };

  return (
    <>
      <BlogLayout {...siteData}>
        <div id='blog-tag-page' css={style}>
          <Box top={'100'}>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {tag} &rdquo; 태그 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 태그들을 보려면 상단 메뉴에서 태그 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos={'top'} margin={'30'} />
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, filePath, }, index) => (
              <Box key={index + filePath.replace('.mdx', '')}>
                <PostHeader i='f27a' w='900' f='Free'>
                  <Link href={`/post/${filePath.replace('.mdx', '')}`}>
                    <a>{frontMatter.title}</a>
                  </Link>
                </PostHeader>
                <div className={'illust-item-info'}>
                  <div className={'item-left'}>
                    <img src={frontMatter.coverImage} alt={`${frontMatter.title} 썸네일`} />
                  </div>
                  <PostContents>
                    <p>
                      <span className='info-name'>포스트 설명</span><br />
                      <span className='info-description'>
                        {frontMatter.description}
                      </span>
                    </p>
                    <p>
                      <span className='info-name'>작성 날짜</span>
                      <span className='info-time'>{getUTC9(frontMatter.createdAt)}</span>
                    </p>
                    <p>
                      <span className='info-name'>카테고리</span>
                      {frontMatter.categories.map((category, index) => (
                        <Link href={`/categories/${String(category)}`} key={index + category}>
                          <a className='info-category'>{category}</a>
                        </Link>
                      ))}
                    </p>
                    <p>
                      <span className='info-name'>태그</span>
                      {frontMatter.tags.map((tag, index) => (
                        <Link href={`/tags/${String(tag)}`} key={index + tag}>
                          <a className='info-tag'>{tag}</a>
                        </Link>
                      ))}
                    </p>
                  </PostContents>
                </div>
              </Box>
            ))}
          </div>
          <GoogleAd pos={'bottom'} margin={'30'} />
          <AlterPagination
            prev={onClickPrev}
            next={onClickNext}
            first={onClickFirst}
            last={onClickLast}
            current={postsIndex}
            total={PostsPages.length}
          />
        </div>
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const tags = await getTagsAndCategories('tags');

  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag: tag.tagName,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post').filter(({ frontMatter, }) => {
    return frontMatter.tags.includes(params.tag);
  });
  
  const PostsPages = getPages(posts, BlogConfig.postPerPage);

  return {
    props: {
      tag: params.tag,
      PostsPages,
    },
  };
};

export default TagPostsPage;

TagPostsPage.propTypes = {
  tag: PropTypes.string,
  PostsPages: PropTypes.array,
};