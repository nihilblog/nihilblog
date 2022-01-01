import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { FaBell, FaFolderOpen, FaPaintBrush } from 'react-icons/fa';
import getUTC9 from '@/utils/getUTC9';
import size from '@/data/size.data';
import { IFrontMatter, IPostString } from '@/types';

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

  const PostItemBoxStyle = css({
    padding: '10px',
    boxShadow: '0 0 10px -4px #333333',
    margin: '30px 0',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    display: 'flex',

    '&:nth-of-type(1)': {
      marginTop: '0',
    },

    '&:nth-last-of-type(1)': {
      marginBottom: '0',
    },

    '& > div': {
      '&:nth-of-type(1)': {
        '& > img': {
          display: 'block',
          borderRadius: '5px',
          border: '2px solid #333333',
          boxSizing: 'border-box',
        },
      },

      '&:nth-of-type(2)': {
        flex: '1',

        '& > h2': {
          marginBottom: '10px',

          '& > a': {
            display: 'block',
            color: '#555555',
            textAlign: 'justify',
            fontWeight: 900,
            backgroundColor: '#33333330',
            padding: '5px 10px',
            borderRadius: '5px',
            letterSpacing: '-1px',

            '&:hover': {
              color: '#ffffff',
              backgroundColor: '#333333',
            },
          },
        },

        '& > p': {
          '&:nth-of-type(1)': {
            textAlign: 'justify',
            color: '#333333',
            marginBottom: '10px',
            lineHeight: '1.55',
            wordBreak: 'break-all',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            letterSpacing: '-1px',

            '& > span': {
              fontSize: '90%',
            },
          },

          '&:nth-of-type(2)': {
            lineHeight: '1',

            '& > .category': {
              padding: '5px 10px',
              backgroundColor: '#33333330',
              color: '#555555',
              borderRadius: '5px',
              marginRight: '5px',
              letterSpacing: '-1px',
              lineHeight: '1',
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',

              '& > svg': {
                marginRight: '5px',
                fill: '#555555',
              },

              '&:hover': {
                backgroundColor: '#333333',
                color: '#ffffff',

                '& > svg': {
                  fill: '#ffffff',
                },
              },

              '&:nth-last-of-type(1)': {
                marginRight: '0',
              },
            },
          },
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      flexDirection: 'column',

      '& > div': {
        '&:nth-of-type(1)': {
          marginBottom: '10px',

          '& > img': {
            width: '100%',
          },
        },
        '&:nth-of-type(2)': {
          '& > h2': {
            fontSize: size[3],
          },
          '& > p': {
            fontSize: size[1],
          },
        },
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      flexDirection: 'row',

      '& > div': {
        '&:nth-of-type(1)': {
          marginRight: '20px',

          '& > img': {
            width: '185px',
          },
        },
        '&:nth-of-type(2)': {
          '& > h2': {
            fontSize: size[4],
          },
          '& > p': {
            fontSize: size[2],
          },
        },
      },
    },
    '@media (min-width: 801px)': {
      flexDirection: 'row',

      '& > div': {
        '&:nth-of-type(1)': {
          marginRight: '20px',

          '& > img': {
            width: '210px',
          },
        },
        '&:nth-of-type(2)': {
          '& > h2': {
            fontSize: size[5],
          },
          '& > p': {
            fontSize: size[3],
          },
        },
      },
    },
  });

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
