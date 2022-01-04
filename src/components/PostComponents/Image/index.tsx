import React from 'react';
import { FaExpand, FaImage } from 'react-icons/fa';
import { useImageStyle } from './style';

interface Props {
  src?: string;
  alt?: string;
  title?: string;
  top?: string;
  bottom?: string;
}

export const Image = ({
  src, alt, title, top = '40', bottom = '40',
}: Props) => {
  const ImageStyle = useImageStyle(top, bottom);

  return (
    <>
      <figure className='post-image-block' css={ImageStyle}>
        <div>
          <img src={src} alt={alt} title={title} />
        </div>
        {
          alt === null
            ? ''
            : (
              <figcaption>
                <FaImage />
                <span>{alt}</span>
              </figcaption>
            )
        }
        <a href={src} target='_blank' rel='noreferrer noopener'>
          <FaExpand />
          <span>크게 보기 (새 창)</span>
        </a>
      </figure>
    </>
  );
};
