import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import getTagsAndCategories from '@/utils/mdx/getTagsAndCategories';
import getAllYearPosts from '@/utils/mdx/getAllYearPosts';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import BlogConfig from '@/data/blogConfig';
import AlterPagination from '@/components/AlterPagination';
import { GoogleAd } from '@/components/ContentComponents';
import { Box, BoxHeader, PostItemBox } from '@/components/LayoutComponensts';

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
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {tag} &rdquo; 태그 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 태그들을 보려면 상단 메뉴에서 태그 링크를 클릭하세요.</P>
          </Box>
          <GoogleAd pos='top' margin='30' />
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, filePath, }) => (
              <PostItemBox
                key={filePath.replace('.mdx', '')}
                type='post'
                frontMatter={frontMatter}
                filePath={filePath}
              />
            ))}
          </div>
          <GoogleAd pos='bottom' margin='30' />
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
    paths: tags.map((tag) => ({
      params: {
        tag: tag.tagName,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const posts = await getAllYearPosts('post').filter(({ frontMatter, }) => frontMatter.tags.includes(params.tag));

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
