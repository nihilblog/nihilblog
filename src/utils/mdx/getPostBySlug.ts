import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import { IPostType } from '@/types';
import getAllYearMdx from './getAllYearMdx';

const getPostBySlug = async (type: IPostType, slug: string) => {
  const posts = getAllYearMdx(type).filter((post) => post.filePath.replace('.mdx', '') === slug);

  const { frontMatter, content, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // @ts-ignore
        remarkUnwrapImages,
      ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug,
  };
};

export default getPostBySlug;
