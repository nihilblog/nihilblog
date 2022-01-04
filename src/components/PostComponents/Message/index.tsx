import React, { useState, useEffect } from 'react';
import {
  FaExclamationCircle, FaInfoCircle, FaQuestionCircle, FaTimesCircle
} from 'react-icons/fa';
import { IMessageStyle, useMessageStyle } from './style';

interface Props {
  children?: React.ReactNode;
  color?: ('r' | 'red' | 'b' | 'blue' | 'g' | 'green' | 'y' | 'yellow');
  top?: string;
  bottom?: string;
}

export const Message = ({
  children, color, top = '40', bottom = '40',
}: Props) => {
  const [ icon, setIcon, ] = useState<React.ReactElement>(null);
  const [ colorType, setColorType, ] = useState<IMessageStyle>({
    color: [],
    word: '',
  });

  useEffect(() => {
    if (color.includes('r')) {
      setIcon(<FaTimesCircle />);
      setColorType({
        ...colorType,
        color: [ '#ff5b5b20', '#fd4444', '#fd444440', ],
        word: '위험',
      });
    } else if (color.includes('b')) {
      setIcon(<FaQuestionCircle />);
      setColorType({
        ...colorType,
        color: [ '#3daeff30', '#0084e2', '#0084e240', ],
        word: '안내',
      });
    } else if (color.includes('g')) {
      setIcon(<FaInfoCircle />);
      setColorType({
        ...colorType,
        color: [ '#11b32c30', '#05881b', '#05881b40', ],
        word: '정보',
      });
    } else if (color.includes('y')) {
      setIcon(<FaExclamationCircle />);
      setColorType({
        ...colorType,
        color: [ '#fff70c30', '#a39000', '#a3900040', ],
        word: '주의',
      });
    }
  }, []);

  const style = useMessageStyle(top, bottom, colorType);

  return (
    <>
      <div className={`Message-${color}`} css={style}>
        <p className='message-title'>{icon}<span>{colorType.word}</span></p>
        <div className='message-content'>{children}</div>
      </div>
    </>
  );
};
