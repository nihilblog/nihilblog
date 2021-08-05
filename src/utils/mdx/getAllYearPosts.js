const getAllPosts = require('./getAllPosts');

const years = [
  '2022', '2023',
];

const months = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
];

module.exports = (type = '') => {
  let posts = getAllPosts(type, '2021', '05');
  
  const month2021 = [ '06', '07', '08', '09', '10', '11', '12', ];
  for (const month in month2021) {
    if (Object.prototype.hasOwnProperty.call(month2021, month)) {
      posts = posts.concat(getAllPosts(type, '2021', month2021[month]));
    }
  }
  
  for (const year in years) {
    if (Object.prototype.hasOwnProperty.call(years, year)) {
      for (const month in months) {
        if (Object.prototype.hasOwnProperty.call(months, month)) {
          posts = posts.concat(getAllPosts(type, years[year], months[month]));
        }
      }
    }
  }
  
  posts = posts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
  
    return afterDate - beforeDate;
  });
  
  return posts;
};
