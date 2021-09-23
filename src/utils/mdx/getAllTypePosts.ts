import getAllYearMdx from './getAllYearMdx';

const getAllTypePosts = () => {
  const posts = getAllYearMdx('post');
  const notices = getAllYearMdx('notice');
  const illusts = getAllYearMdx('illust');

  const AllPosts = posts.concat(notices, illusts);
  const SortedAllPosts = AllPosts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;

    return afterDate - beforeDate;
  });

  return SortedAllPosts;
};

export default getAllTypePosts;
