import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { FaCommentAlt, FaLink } from 'react-icons/fa';
import { size } from '@/data';
import { useHStyle } from './style';

interface Props {
  children?: React.ReactNode;
  top?: string;
  bottom?: string;
  type?: ('1' | '2' | '3' | '4');
}

export const H = ({
  children, top = '60', bottom = '60', type = '1',
}: Props) => {
  const [ topDown, setTapDown, ] = useState(0);
  const [ backColor, setBackColor, ] = useState('');
  const [ textColor, setTextColor, ] = useState('');
  const [ spanSize, setSpanSize, ] = useState(0);
  const [ fontSize, setFontSize, ] = useState<string[]>([]);

  const types = {
    1: 'h2',
    2: 'h3',
    3: 'h4',
    4: 'h5',
  };

  useEffect(() => {
    if (type === '1') {
      setTapDown(20);
      setBackColor('#333333');
      setTextColor('#ffffff');
      setSpanSize(120);
      setFontSize([ size[4], size[5], size[6], ]);
    } else if (type === '2') {
      setTapDown(15);
      setBackColor('#444444');
      setTextColor('#ffffff');
      setSpanSize(100);
      setFontSize([ size[4], size[5], size[6], ]);
    } else if (type === '3') {
      setTapDown(12);
      setBackColor('#555555');
      setTextColor('#ffffff');
      setSpanSize(80);
      setFontSize([ size[4], size[5], size[6], ]);
    } else if (type === '4') {
      setTapDown(8);
      setBackColor('#666666');
      setTextColor('#ffffff');
      setSpanSize(60);
      setFontSize([ size[4], size[5], size[6], ]);
    }
  }, [ type, ]);

  const styleObj = {
    topDown, backColor, textColor, spanSize, fontSize,
  };

  const HStyle = useHStyle(top, bottom, styleObj);

  const content = (
    <span>
      <FaCommentAlt />
      {children}
      <a href='#top' aria-label='top'>
        <FaLink />
      </a>
    </span>
  );

  return jsx(
    types[type],
    {
      className: `post-heading h-${type}`,
      css: HStyle,
    },
    content
  );
};
