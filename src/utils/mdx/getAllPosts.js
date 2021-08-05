const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = (type = '', year = '', month = '') => {
  const postPath = path.join(process.cwd(), 'posts', `${type}/${year}/${month}`);
  const getPostPaths = fs.readdirSync(postPath).filter((p) => /\.mdx?$/.test(p));
  
  const Allposts = getPostPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postPath, filePath), 'utf8');
    const { data, content, } = matter(source);
    
    const { coverImage, description, title, } = data;
    
    const createdAt = data.createdAt.getTime() - 32400000;
    const updatedAt = data.updatedAt.getTime() - 32400000;
    const drawDate = data.drawDate ? data.drawDate.getTime() - 32400000 : '';
    const tags = data.tags ? data.tags : '';
    const categories = data.categories ? data.categories : '';
    const keywords = data.keywords ? data.keywords : '';
    
    let frontMatter;
    
    if (data.drawDate) {
      frontMatter = {
        ...data,
        createdAt,
        updatedAt,
        drawDate,
        coverImage,
        title,
        keywords,
        description,
      };
    } else if (data.notice) {
      frontMatter = {
        ...data,
        createdAt,
        updatedAt,
        coverImage,
        title,
        description,
      };
    } else {
      frontMatter = {
        ...data,
        createdAt,
        updatedAt,
        coverImage,
        title,
        tags,
        categories,
        description,
      };
    }
    
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
  
  return Allposts.filter((post) => {
    return post.frontMatter.display === true;
  });
};
