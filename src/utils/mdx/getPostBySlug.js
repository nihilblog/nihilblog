const { serialize, } = require('next-mdx-remote/serialize');
const remarkUnWrapImages = require('remark-unwrap-images');
const getAllYearIllusts = require('./getAllYearIllusts');
const getAllYearPosts = require('./getAllYearPosts');

module.exports = async (type = '', slug = '') => {
  let posts;

  if (type !== 'illust') {
    posts = getAllYearPosts(type).filter((post) => post.filePath.replace('.mdx', '') === slug);
  } else {
    posts = getAllYearIllusts(type).filter((post) => post.filePath.replace('.mdx', '') === slug);
  }

  const { frontMatter, content, } = posts[0];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkUnWrapImages,
      ],
    },
  });

  return {
    frontMatter,
    source: mdxSource,
    slug,
  };
};
