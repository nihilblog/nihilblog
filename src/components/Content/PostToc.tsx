import React from 'react';
import { css } from '@emotion/react';
import { FaListUl } from 'react-icons/fa';
import size from '@/data/size.data';
import { A } from '@/components/PostComponents';
import { IH2 } from '@/types';

interface Props {
  toc?: IH2[];
}

export const PostToc = ({ toc, }: Props) => {
  const PostTocStyle = css({
    margin: '80px 0',
    overflowY: 'hidden',

    '& > div': {
      padding: '20px 10px',
      backgroundColor: '#333333',
      textAlign: 'justify',
      letterSpacing: '-1px',
      lineHeight: '1',
      borderRadius: '10px',
      marginBottom: '10px',

      '& > span': {
        fontSize: '120%',
        color: '#ffffff',
        fontWeight: 900,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& > svg': {
          fill: '#ffffff',
          marginRight: '10px',
        },
      },
    },

    '& > ul': {
      '& ul': {
        marginLeft: '20px',
      },

      '& li': {
        margin: '3px 0',

        '& > span': {
          marginRight: '5px',
          fontWeight: 900,
          color: '#3f91ff70',
          borderRadius: '5px',
        },

        '&:hover': {
          '& > span': {
            color: '#3f91ff',
          },
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& > div': {
        fontSize: size[4],
      },
      '& li': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& > div': {
        fontSize: size[5],
      },
      '& li': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& > div': {
        fontSize: size[6],
      },
      '& li': {
        fontSize: size[3],
      },
    },
  });

  return (
    <>
      {toc.length > 0 && (
        <div id='post-table-of-contents' css={PostTocStyle}>
          <div id='top'>
            <span><FaListUl />목차</span>
          </div>
          <ul id='table-of-contents-list'>
            {toc.map((item, index) => (
              <li key={item.name + item.id}>
                <span>{index + 1}.</span>
                <A href={`#${item.id}`} type='blog'>{item.text}</A>
                {item.items.length > 0 && (
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subItem.name + subItem.id}>
                        <span>{index + 1}.{subIndex + 1}.</span>
                        <A href={`#${subItem.id}`} type='blog'>{subItem.text}</A>
                        {subItem.items.length > 0 && (
                          <ul>
                            {subItem.items.map((subItem2, subIndex2) => (
                              <li key={subItem2.name + subItem2.id}>
                                <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.</span>
                                <A href={`#${subItem2.id}`} type='blog'>{subItem2.text}</A>
                                {subItem2.items.length > 0 && (
                                  <ul>
                                    {
                                      subItem2.items.map((lastItem, lastIndex) => (
                                        <li key={lastItem.name + lastItem.id}>
                                          <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.{lastIndex + 1}.</span>
                                          <A href={`#${lastItem.id}`} type='blog'>{lastItem.text}</A>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
