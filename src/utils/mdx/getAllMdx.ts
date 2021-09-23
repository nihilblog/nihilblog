import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  IFrontMatter, IPosts, IPostType, IMatterData
} from '@/types';

const getAllMdx = (type: IPostType, year?: string, month?: string): IPosts[] => {
  const folderPath = path.join(process.cwd(), 'posts', `${type}/${year}/${month}`);
  const postPaths = fs.readdirSync(folderPath).filter((p) => /\.mdx?$/.test(p));

  const allPosts = postPaths.map((file) => {
    const source = fs.readFileSync(path.join(folderPath, file), 'utf8');
    const { data, content, } = matter(source);
    const newData: IMatterData = { ...data, };

    const frontMatter: IFrontMatter = {
      id: newData.id,
      title: newData.title,
      description: newData.description,
      coverImage: newData.coverImage,
      tags: newData.tags,
      categories: newData.categories,
      createdAt: newData.createdAt.getTime() - 32400000,
      updatedAt: newData.updatedAt.getTime() - 32400000,
      keywords: newData.keywords,
      drawDate: newData.drawDate.getTime() - 32400000,
      display: newData.display,
      notice: newData.notice,
    };

    return {
      frontMatter,
      filePath: file,
      fullPath: `/${type}/${file.replace('.mdx', '')}`,
      content,
    };
  });

  return allPosts.filter((post) => post.frontMatter.display === true);
};

export default getAllMdx;
