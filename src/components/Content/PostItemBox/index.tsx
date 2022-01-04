import React from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { FaBell, FaFolderOpen, FaPaintBrush } from 'react-icons/fa';
import getUTC9 from '@/utils/getUTC9';
import { IFrontMatter, IPostString } from '@/types';
import { style as PostItemBoxStyle } from './style';

interface Props {
  type: IPostString;
  frontMatter: IFrontMatter;
  slug: string;
}

export const PostItemBox = ({ type, frontMatter, slug, }: Props) => {
  const {
    description, title, coverImage, categories, createdAt, keywords,
  } = frontMatter;

  const src = 'https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT';

  return (
    <>
      <div css={PostItemBoxStyle}>
        <div>
          {
            coverImage
              ? <img src={coverImage} alt={title} />
              : <img src={src} alt={title} />
          }

        </div>
        <div>
          <h2>
            <Link href={`/${type}/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p>{description}</p>
          <p>
            {
              type === 'post' && categories.map((item) => (
                <Link key={uuid()} href={`/categories/${item}`}>
                  <a className='category post'><FaFolderOpen />{item}</a>
                </Link>
              ))
            }
            {
              type === 'notice' && (
                <Link href={`/${type}/page/1`}>
                  <a className='category notice'><FaBell />공지</a>
                </Link>
              )
            }
            {
              type === 'illust' && keywords.map((item) => (
                <Link key={uuid()} href={`/illust/keywords/${item}`}>
                  <a className='category illust'><FaPaintBrush />{item}</a>
                </Link>
              ))
            }
            {' - '}
            <span className='created-at'>{getUTC9(createdAt as number)}</span>
          </p>
        </div>
      </div>
    </>
  );
};
