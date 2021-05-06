const getAllPosts = require('./getAllPosts');

// const years = [
//   '2022',
// ];

module.exports = (type = '') => {
  const posts2021 = getAllPosts(type, '2021');
  
  // let posts;
  // for (const year in years) {
  //   posts = posts2021.concat(getAllPosts(type, years[year]));
  // }
  
  // posts = posts.sort((a, b) => {
  //   const beforeDate = a.frontMatter.createdAt;
  //   const afterDate = b.frontMatter.createdAt;
  
  //   return afterDate - beforeDate;
  // });
  
  // return posts;
  
  const AllPosts = posts2021.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
    
    return afterDate - beforeDate;
  });
  
  return AllPosts;
};