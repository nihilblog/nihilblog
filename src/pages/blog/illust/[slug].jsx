import React from 'react';
import BlogLayout from '@/layouts/BlogLayout';
import BlogMessage from '@/components/ContentComponents/BlogMessage';
import BlogSeriesList from '@/components/ContentComponents/BlogSeriesList';
import getAllYearIllusts from '@/utils/mdx/getAllYearIllusts';
import getPostBySlug from '@/utils/mdx/getPostBySlug';
import Box from '@/components/LayoutComponensts/Box';
import BoxHeader from '@/components/LayoutComponensts/BoxHeader';
import { Line, MainImage } from '@/components/PostComponents';
import PostInfo from '@/components/LayoutComponensts/PostInfo';
import getUTC9 from '@/utils/getUTC9';
import getUTCString from '@/utils/getUTCString';
import MDXComponents from '@/components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote';
import PostNavigation from '@/components/PostNavigation';
import Link from 'next/link';
import GoogleAd from '@/components/ContentComponents/GoogleAd';
import Utterances from '@/components/LayoutComponensts/Utterances';
import { useRouter } from 'next/router';
import CommentGuideMessage from '@/components/PostComponents/CustomMessage/CommentGuideMessage';

const BlogIllustPage = ({ illust, prev, next, }) => {
  const { frontMatter, slug, source, } = illust;
  const router = useRouter();
  
  const siteData = {
    pageName: frontMatter.title,
    pageDescription: frontMatter.description,
    pageKeywords: '그림, 일러스트, 캐릭터, 컨셉아트, 디자인, 창작, 캐릭터디자인, 캐릭터일러스트, 판타지, illustration, artwork, character, fantasy, characterillustration, characterdesign, fantasycharacter ' + frontMatter.keywords.join(', '),
    pageURL: `/blog/illust/${slug}`,
    pageType: 'article',
    pageImage: frontMatter.coverImage ? frontMatter.coverImage : '',
    pageTag: frontMatter.keywords.join(', '),
    pageSection: 'illust',
    pageCreated: getUTCString(frontMatter.createdAt),
    pageUpdated: getUTCString(frontMatter.updatedAt),
  };
  
  return (
    <>
      <BlogLayout {...siteData}>
        <BlogMessage />
        <BlogSeriesList />
        <article id='blog-illust-list-page'>
          <Box>
            <BoxHeader i='f53f' w='900' f='Free'>{frontMatter.title}</BoxHeader>
            {
              frontMatter.coverImage
                ? <MainImage src={frontMatter.coverImage} alt={frontMatter.title} />
                : ''
            }
            <PostInfo name='작성 날짜' i='f017' w='500' itemType='p'>
              {getUTC9(frontMatter.createdAt)}
            </PostInfo>
            {
              frontMatter.updatedAt > frontMatter.createdAt
                ?
                (<PostInfo name='수정 날짜' i='f017' w='500' itemType='p'>
                  {getUTC9(frontMatter.updatedAt)}
                </PostInfo>)
                :
                ''
            }
            <PostInfo name='작업 날짜' i='f017' w='500' itemType='p'>
              {getUTC9(frontMatter.drawDate)}
            </PostInfo>
            <PostInfo name={'키워드'} i={'f1fc'} w={'900'} itemType={'link'} linkIcon={'f1fc'}>
              {frontMatter.keywords.map((keyword, index) => (
                <Link href={`/blog/illust/keywords/${String(keyword)}`} key={index + keyword}>
                  <a>{keyword}</a>
                </Link>
              ))}
            </PostInfo>
            <GoogleAd slot={'7775831240'} top={'true'} />
            <Line />
            <MDXRemote {...source} components={{ ...MDXComponents, }} />
            <CommentGuideMessage postType={router.pathname} />
            <GoogleAd slot={'6837513463'} />
            <Utterances />
          </Box>
        </article>
        <PostNavigation prev={prev} next={next} type='illust' />
      </BlogLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const illusts = getAllYearIllusts('illust');
  
  return {
    paths: illusts.map(illust => {
      return {
        params: {
          slug: illust.filePath.replace('.mdx', ''),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, }) => {
  const illusts = getAllYearIllusts('illust');
  const illustIndex = illusts.findIndex((illust) => illust.filePath.replace('.mdx', '') === params.slug);
  const prev = illusts[illustIndex + 1] || null;
  const next = illusts[illustIndex - 1] || null;
  const illust = await getPostBySlug('illust', params.slug);
  
  return {
    props: {
      illust,
      prev,
      next,
    },
  };
};

export default BlogIllustPage;