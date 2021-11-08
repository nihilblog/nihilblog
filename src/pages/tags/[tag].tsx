import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from '@/layouts/BlogLayout';
import { P } from '@/components/PostComponents';
import getPages from '@/utils/getPages';
import config from '@/data/config.data';
import {
  AlterPagination, Box, BoxHeader, PostItemBox
} from '@/components/LayoutComponents';
import {
  IFirst, ILast, INext, IPostTCK, IPrev
} from '@/types';
import getCount from '@/utils/getCount';
import { useMetaData } from '@/hooks';
import { getAllTimePost, getTagsAndCategories } from '@/utils/mdx';

const TagPostsPage = ({ tag, PostsPages, }: IPostTCK) => {
  const [ postsIndex, setPostsIndex, ] = useState(0);

  const totalCount = getCount(PostsPages);

  const onClickPrev: IPrev = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(postsIndex - 1);
    }
  }, [ postsIndex, ]);

  const onClickNext: INext = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(postsIndex + 1);
    }
  }, [ postsIndex, ]);

  const onClickFirst: IFirst = useCallback(() => {
    if (postsIndex !== 0) {
      setPostsIndex(0);
    }
  }, [ postsIndex, ]);

  const onClickLast: ILast = useCallback(() => {
    if (postsIndex !== PostsPages.length - 1) {
      setPostsIndex(PostsPages.length - 1);
    }
  }, [ postsIndex, ]);

  const style = css`
    margin-bottom: 100px;
  `;

  const siteMeta = useMetaData({
    title: `"${tag}" 관련 포스트`,
    url: `/tags/${tag}`,
  });

  return (
    <>
      <BlogLayout meta={siteMeta}>
        <div id='blog-tag-page' css={style}>
          <Box top='100'>
            <BoxHeader i='f002' w='900' f='Free'>&ldquo; {tag} &rdquo; 태그 관련 포스트 {totalCount}건</BoxHeader>
            <P bottom='0'>다른 태그들을 보려면 상단 메뉴에서 태그 링크를 클릭하세요.</P>
          </Box>
          <div id='blog-post-list'>
            {PostsPages[postsIndex].map(({ frontMatter, slug, }) => (
              <PostItemBox
                key={slug}
                type='post'
                frontMatter={frontMatter}
                slug={slug}
              />
            ))}
          </div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getTagsAndCategories('tags');

  return {
    paths: tags.map(({ tagName, }) => ({
      params: {
        tag: tagName,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    tag: string;
  },
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const allPosts = getAllTimePost();

  const posts = allPosts.filter((post) => post.frontMatter.type === 'post')
    .filter(({ frontMatter, }) => frontMatter.tags.includes(params.tag));

  const PostsPages = getPages(posts, config.postPerPage);

  return {
    props: {
      tag: params.tag,
      PostsPages,
    },
  };
};

export default TagPostsPage;
