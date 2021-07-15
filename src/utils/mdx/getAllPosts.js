const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = (type = '', year = '', month = '') => {
  const postPath = path.join(process.cwd(), 'posts', `${type}/${year}/${month}`);
  const getPostPaths = fs.readdirSync(postPath).filter((path) => /\.mdx?$/.test(path));
  
  const Allposts = getPostPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postPath, filePath), 'utf8');
    const { data, content, } = matter(source);
    
    const createdAt = data.createdAt.getTime() - 32400000;
    const updatedAt = data.updatedAt.getTime() - 32400000;
    const drawDate = data.drawDate ? data.drawDate.getTime() - 32400000 : '';
    
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
    
    let fullPath;
    
    if (type === 'post') {
      fullPath = `/post/${filePath.replace('.mdx', '')}`;
    } else if (type === 'notice') {
      fullPath = `/notice/${filePath.replace('.mdx', '')}`;
    } else {
      fullPath = `/illust/${filePath.replace('.mdx', '')}`;
    }
    
    return {
      frontMatter,
      filePath,
      fullPath,
      content,
    };
  });
  
  const displayAllPosts = Allposts.filter((post) => {
    return post.frontMatter.display === true;
  });
  
  return displayAllPosts;
};