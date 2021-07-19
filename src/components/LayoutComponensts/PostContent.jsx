import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';
import { MainImage } from '@/components/PostComponents';
import { PostToc } from '@/components/LayoutComponensts';
import { useRouter } from 'next/router';
import { GoogleAd } from '@/components/ContentComponents';

export const PostContent = ({ children, top = '30', bottom = '30', idName, frontMatter, }) => {
  const [ toc, setToc, ] = useState([]);
  const postContentRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    const contents = postContentRef.current;
    const tocData = [];

    const contentsArray = Array.from(contents.children);

    const headingContents = contentsArray.filter((node) => {
      return node.className.includes('post-heading');
    });

    for (let i = 0; i < headingContents.length; i++) {
      headingContents[i].id = `toc${i}`;
    }

    headingContents.forEach((item) => {
      const { innerText: text, id, } = item;

      if (item.nodeName === 'H2') {
        tocData.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H3' && tocData.length > 0) {
        tocData[tocData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H4' && tocData.length > 0) {
        const subData = tocData[tocData.length - 1].items;

        subData[subData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
          items: [],
        });
      } else if (item.nodeName === 'H5' && tocData.length > 0) {
        const subData = tocData[tocData.length - 1].items;
        const subsubData = subData[subData.length - 1].items;

        subsubData[subsubData.length - 1].items.push({
          id,
          text,
          name: item.nodeName,
        });
      }
    });

    setToc(tocData);
  }, [ router.asPath, ]);
  
  const style = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: justify;
    letter-spacing: -1px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    border-radius: 10px;
    transition: all 0.3s;

    @media (min-width: 1px) and (max-width: 600px) {
      & p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & p {font-size: ${size[3]};}
    }
  `;
  
  const src = '썸네일이 없습니다';
  
  return (
    <>
      <div id={idName} css={style} ref={postContentRef}>
        {
          frontMatter.coverImage
            ?
            <MainImage src={frontMatter.coverImage} alt={frontMatter.title} />
            :
            <MainImage src={src} alt={frontMatter.title} />
        }
        <GoogleAd pos={'top'} />
        <PostToc toc={toc} />
        {children}
      </div>
    </>
  );
};

PostContent.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  children: PropTypes.node,
  idName: PropTypes.string,
  frontMatter: PropTypes.object,
};