import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IFrontMatter, IPosts } from '@/types';

export const getAllPost = (year: string, month: string): IPosts[] => {
  const folderPath = path.join(process.cwd(), 'posts', `${year}/${month}`);
  const postPaths = fs.readdirSync(folderPath).filter((post) => /\.mdx?$/.test(post));

  const allPosts: IPosts[] = postPaths.map((postFile) => {
    const source = fs.readFileSync(path.join(folderPath, postFile), 'utf8');
    const { data, content, } = matter(source);
    const newData: IFrontMatter = { ...data, };

    const frontMatter: IFrontMatter = {
      id: newData.id,
      title: newData.title,
      description: newData.description,
      coverImage: newData.coverImage,
      tags: newData.tags,
      categories: newData.categories,
      createdAt: (newData.createdAt as Date).getTime() - 32400000,
      updatedAt: (newData.updatedAt as Date).getTime() - 32400000,
      keywords: newData.keywords,
      drawDate: (newData.drawDate as Date).getTime() - 32400000,
      display: newData.display,
      type: newData.type,
    };

    return {
      frontMatter,
      slug: postFile.replace('.mdx', ''),
      fullPath: `/${newData.type}/${postFile.replace('.mdx', '')}`,
      content,
      date: {
        year,
        month,
        yearMonth: `${year}-${month}`,
      },
    };
  });

  return allPosts.filter((post) => post.frontMatter.display === true);
};
