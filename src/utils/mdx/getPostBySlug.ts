import { serialize } from 'next-mdx-remote/serialize';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkCodeTitles from 'remark-code-titles';
import remarkSlug from 'remark-slug';
import mdxPrism from 'mdx-prism';
import { IPostString } from '@/types';
import getAllYearMdx from './getAllYearMdx';

const getPostBySlug = async (type: IPostString, slug: string) => {
  const posts = getAllYearMdx(type).filter((post) => post.filePath.replace('.mdx', '') === slug);

  const { frontMatter, content, } = posts[0];

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

export default getPostBySlug;
