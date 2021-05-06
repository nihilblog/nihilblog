const getAllPosts = require('./getAllPosts');

const illustsYears = [
  '2017', '2018', '2019', '2020', '2021',
];

module.exports = (type = '') => {
  const illusts2016 = getAllPosts(type, '2016');
  
  let illusts;
  for (let year in illustsYears) {
    illusts = illusts2016.concat(getAllPosts(type, illustsYears[year]));
  }
  
  illusts = illusts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
    
    return afterDate - beforeDate;
  });
  
  return illusts;
};