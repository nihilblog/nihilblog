import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkCodeTitles from 'remark-code-titles';
import remarkSlug from 'remark-slug';
import mdxPrism from 'mdx-prism';
import { getAllTimePost } from './getAllTimePost';
import { IPostSlug } from '@/types';

export const getSinglePost = async (paramsSlug: string): Promise<IPostSlug> => {
  const posts = getAllTimePost().filter((post) => post.slug === paramsSlug);

  const { frontMatter, content, slug, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // @ts-ignore
        remarkUnwrapImages,
        // @ts-ignore
        remarkCodeTitles,
        // @ts-ignore
        remarkSlug,
      ],
      rehypePlugins: [ mdxPrism, ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug,
  };
};
