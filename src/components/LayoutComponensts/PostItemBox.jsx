import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import getUTC9 from '@/utils/getUTC9';
import Link from 'next/link';
import size from '@/data/size';

export const PostItemBox = ({ type, frontMatter, filePath, }) => {
  const { description, title, coverImage, categories, createdAt, keywords, } = frontMatter;
  const typeObj = {};
  
  if (type === 'post') {
    typeObj.href = 'post';
  } else if (type === 'notice') {
    typeObj.href = 'notice';
  } else {
    typeObj.href = 'illust';
  }
  
  const style = css`
    padding: 10px;
    box-shadow: 0 0 10px -4px #333333;
    margin: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    
    &:nth-of-type(1) {
      margin-top: 0;
    }
    
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
    
    & > div {
      &:nth-of-type(1) {
        & > img {
          display: block;
          border-radius: 5px;
          border: 2px solid #333333;
          box-sizing: border-box;
        }
      }
      
      &:nth-of-type(2) {
        flex: 1;
        
        & > h2 {
          margin-bottom: 10px;
          
          & > a {
            display: block;
            color: #555555;
            text-align: justify;
            font-weight: 900;
            background-color: #33333330;
            padding: 5px 10px;
            border-radius: 5px;
            transition: all 0.3s;
            letter-spacing: -1px;
            
            &:hover {
              color: #ffffff;
              background-color: #333333;
              transition: all 0.3s;
            }
          }
        }
        
        & > p {
          &:nth-of-type(1) {
            text-align: justify;
            color: #333333;
            margin-bottom: 10px;
            line-height: 1.55;
            word-break: break-all;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            letter-spacing: -1px;
            
            & > span {
              font-size: 90%;
            }
          }
          
          &:nth-of-type(2) {
            line-height: 100%;
            
            & > .category {
              padding: 5px 10px;
              background-color: #33333330;
              color: #555555;
              border-radius: 5px;
              transition: all 0.3s;
              margin-right: 5px;
              display: inline-block;
              letter-spacing: -1px;
              
              &:before {
                font-weight: 900;
                font-family: 'Font Awesome 5 Free', sans-serif;
                margin-right: 5px;
              }
              
              &.post:before {
                content: '\\f07c';
              }
              
              &.notice:before {
                content: '\\f0f3';
              }
              
              &.illust:before {
                content: '\\f1fc';
              }
              
              &:hover {
                background-color: #333333;
                color: #ffffff;
                transition: all 0.3s;
              }
              
              &:nth-last-of-type(1) {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
    
    @media (min-width: 1px) and (max-width: 600px) {
      flex-direction: column;
      
      & > div {
        &:nth-of-type(1) {
          margin-bottom: 10px;
          
          & > img {
            width: 100%;
          }
        }

        &:nth-of-type(2) {
          & > h2 {font-size: ${size[3]};}
          & > p {font-size: ${size[1]};}
        }
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      flex-direction: row;

      & > div {
        &:nth-of-type(1) {
          margin-right: 20px;

          & > img {
            width: 185px;
          }
        }

        &:nth-of-type(2) {
          & > h2 {font-size: ${size[4]};}
          & > p {font-size: ${size[2]};}
        }
      }
    }
    
    @media (min-width: 801px) {
      flex-direction: row;
      
      & > div {
        &:nth-of-type(1) {
          margin-right: 20px;
          
          & > img {
            width: 210px;
          }
        }

        &:nth-of-type(2) {
          & > h2 {font-size: ${size[5]};}
          & > p {font-size: ${size[3]};}
        }
      }
    }
  `;
  
  return (
    <>
      <div css={style}>
        <div>
          <img src={coverImage} alt={title} />
        </div>
        <div>
          <h2>
            <Link href={`/${typeObj.href}/${filePath.replace('.mdx', '')}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p>{description}</p>
          <p>
            {
              type === 'post'
                ?
                categories.map((item, index) => (
                  <Link key={item + index} href={`/categories/${item}`}>
                    <a className={'category post'}>{item}</a>
                  </Link>
                ))
                :
                type === 'notice'
                  ?
                  (
                    <Link href={`/${typeObj.href}/page/1`}>
                      <a className={'category notice'}>공지</a>
                    </Link>
                  )
                  :
                  keywords.map((item, index) => (
                    <Link key={item + index} href={`/illust/keywords/${item}`}>
                      <a className={'category illust'}>{item}</a>
                    </Link>
                  ))
            }
            {' - '}
            <span className={'created-at'}>{getUTC9(createdAt)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

PostItemBox.propTypes = {
  type: PropTypes.string,
  frontMatter: PropTypes.object,
  filePath: PropTypes.string,
};