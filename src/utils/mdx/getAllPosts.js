const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = (type = '', year = '') => {
  const postPath = path.join(process.cwd(), 'posts', type, year);
  const getPostPaths = fs.readdirSync(postPath).filter((path) => /\.mdx?$/.test(path));
  
  const Allposts = getPostPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postPath, filePath), 'utf8');
    const { data, content, } = matter(source);
    
    const createdAt = data.createdAt.getTime();
    const updatedAt = data.updatedAt.getTime();
    const drawDate = data.drawDate ? data.drawDate.getTime() : '';
    
    const frontMatter = data.drawDate
      ? {
        ...data,
        createdAt,
        updatedAt,
        drawDate,
      }
      : {
        ...data,
        createdAt,
        updatedAt,
      };
    
    return {
      frontMatter,
      filePath,
      content,
    };
  });
  
  const SortedAllPosts = Allposts.sort((a, b) => {
    const beforeDate = a.frontMatter.createdAt;
    const afterDate = b.frontMatter.createdAt;
    
    return afterDate - beforeDate;
  });
  
  return SortedAllPosts;
};