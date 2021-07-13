import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import { copyToClipboard } from '@/utils/copy-to-clipboard';
import PropTypes from 'prop-types';

export const CopyCode = ({ code, }) => {
  const [ word, setWord, ] = useState('복사');

  const onClickCopy = useCallback(() => {
    copyToClipboard(code);
    setWord('복사 완료');
  }, []);

  const onMouseLeaveCopy = useCallback(() => {
    setWord('복사');
  }, []);

  const CopyCode = css`
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    color: #ffffff80;
    font-weight: 500;
    border: 2px solid #ffffff80;
    transition: all, 0.3s;
    background-color: transparent;
    cursor: pointer;
    z-index: 2;

    &:before {
      content: '\\f24d' ' ${word}';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
    }

    &:hover {
      background-color: #ffffff;
      color: #333333;
      transition: all, 0.3s;
      border: 2px solid #ffffff;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
    }

    @media (min-width: 801px) {
      font-size: ${size[3]};
    }
  `;
  return (
    <>
      <button onClick={ onClickCopy } onMouseLeave={ onMouseLeaveCopy } css={ CopyCode }/>
    </>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string,
};