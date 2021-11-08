import React, {
  useEffect, useState, useRef, ReactNode
} from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import size from '@/data/size.data';
import { MainImage } from '@/components/PostComponents';
import { IFrontMatter, IH2 } from '@/types';
import { GoogleAd, PostToc } from '@/components/PostLayoutComponents';

interface Props {
  children?: ReactNode;
  top?: string;
  bottom?: string;
  idName?: string;
  frontMatter?: IFrontMatter;
}

export const PostContent = ({
  children, top = '30', bottom = '30', idName, frontMatter,
}: Props) => {
  const [ toc, setToc, ] = useState<IH2[]>([]);
  const postContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const contents = postContentRef.current;
    const tocData: IH2[] = [];

    const contentsArray = Array.from(contents.children);

    const headingContents = contentsArray.filter((node) => node.className.includes('post-heading'));

    for (let i = 0; i < headingContents.length; i++) {
      headingContents[i].id = `toc${i}`;
    }

    headingContents.forEach((item) => {
      const { innerText: text, id, } = item as HTMLDivElement;

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

  const src = 'https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT';

  return (
    <>
      <div id={idName} css={style} ref={postContentRef}>
        {
          frontMatter.coverImage
            ? <MainImage src={frontMatter.coverImage} alt={frontMatter.title} />
            : <MainImage src={src} alt={frontMatter.title} />
        }
        {router.asPath.startsWith('/notice') ? '' : <GoogleAd pos='top' />}
        <PostToc toc={toc} />
        {children}
      </div>
    </>
  );
};
