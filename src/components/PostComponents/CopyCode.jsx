import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';
import { copyToClipboard } from '@/utils/copy-to-clipboard';

export const CopyCode = ({ code, color, }) => {
  const [ word, setWord, ] = useState('복사');

  const onClickCopy = useCallback(() => {
    copyToClipboard(code);
    setWord('복사 완료');
  }, []);

  const onMouseLeaveCopy = useCallback(() => {
    setWord('복사');
  }, []);

  const CopyCode = css`
    border-radius: 10px 10px 0 0;
    font-weight: 500;
    transition: all, 0.3s;
    cursor: pointer;
    line-height: 1;
    color: ${color[0]};
    background-color: ${color[0]}60;
    border: none;
    margin-left: 5px;
    display: inline-block;
    outline: none;

    &:before {
      content: '\\f24d' ' ${word}';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
    }

    &:hover {
      background-color: ${color[0]};
      color: ${color[1]};
      transition: all, 0.3s;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
      padding: 10px;
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
      padding: 10px 15px;
    }

    @media (min-width: 801px) {
      font-size: ${size[3]};
      padding: 10px 20px;
    }
  `;
  return (
    <>
      <button type='button' aria-label='copy' onClick={onClickCopy} onMouseLeave={onMouseLeaveCopy} css={CopyCode} />
    </>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string,
  color: PropTypes.array,
};
