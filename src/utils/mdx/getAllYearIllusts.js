const getAllPosts = require('./getAllPosts');

const illustsYears = [
  '2017', '2018', '2019', '2020', '2021', '2022', '2023',
];

module.exports = (type = '') => {
  const illusts2016 = getAllPosts(type, '2016');
  
  let illusts;
  for (const year in illustsYears) {
    if (Object.prototype.hasOwnProperty.call(illustsYears, year)) {
      illusts = illusts2016.concat(getAllPosts(type, illustsYears[year]));
    }
  }
  
  illusts = illusts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
    
    return afterDate - beforeDate;
  });
  
  return illusts;
};
