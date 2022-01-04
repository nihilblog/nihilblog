import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import rehypePrism from 'rehype-prism-plus';
import { getAllTimePost } from './getAllTimePost';
import { IPostSlug } from '@/types';

export const getSinglePost = async (paramsSlug: string): Promise<IPostSlug> => {
  const posts = getAllTimePost().filter((post) => post.slug === paramsSlug);

  const { frontMatter, content, slug, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkUnwrapImages,
        remarkSlug,
        remarkCodeTitles,
      ],
      rehypePlugins: [
        rehypePrism,
      ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug,
  };
};
