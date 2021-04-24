import React, { useCallback, useState } from 'react';
import { copyToClipboard } from '@/utils/copy-to-clipboard';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Pre = ({ children, top = 40, bottom = 40, }) => {
  const [ word, setWord, ] = useState('복사');

  const codeLang = children.props.className;
  const codeContent = children.props.children;
  const matches = codeLang.match(/language-(?<lang>.*)/);
  const lang = (
    matches && matches.groups && matches.groups.lang
      ? matches.groups.lang
      : ''
  );
  const code = children.props.children.trim();
  const capitalizeLang = lang.toUpperCase();

  const onClickCopy = useCallback(() => {
    copyToClipboard(code);
    setWord('복사 완료');
  }, []);

  const onMouseLeaveCopy = useCallback(() => {
    setWord('복사');
  }, []);

  let color = [];

  switch (capitalizeLang) {
    case 'TEXT':
      color = [ '#888888', '#ffffff', ];
      break;
    case 'HTML':
      color = [ '#f47933', '#ffffff', ];
      break;
    case 'CSS':
      color = [ '#007bc9', '#ffffff', ];
      break;
    case 'JS':
    case 'JAVASCRIPT':
      color = [ '#f7df1e', '#333333', ];
      break;
    case 'JSX':
      color = [ '#61dafb', '#ffffff', ];
      break;
    default:
      color = [ '#888888', '#ffffff', ];
      break;
  }

  const style = css`
    position: relative;
    margin: ${top}px 0px ${bottom}px 0px;

    &:before {
      content: '\\f121  ${capitalizeLang}';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      padding: 5px 10px;
      background-color: ${color[0]};
      color: ${color[1]};
      text-align: center;
      border-radius: 10px 0px 10px 0px;
      box-sizing: border-box;
      position: absolute;
    }

    & > pre[class*="language-"] {
      background-color: #333333;
      border: 5px solid ${color[0]};
      box-sizing: border-box;
      border-radius: 10px;
      padding: 60px 10px 10px 10px;

      font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
      font-weight: 400;

      & > code {
        font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
        font-weight: 400;

        & span {
          font-family: 'CascadiaCode', 'Noto Sans CJK KR', sans-serif;
          font-weight: 400;
        }
      }
    }
  `;

  return (
    <>
      <div className='gatsby-highlight' data-language={lang} css={style}>
        <CopyCode onClick={onClickCopy} onMouseLeave={onMouseLeaveCopy}>{word}</CopyCode>
        <pre className={codeLang}>
          <code className={codeLang}>{codeContent}</code>
        </pre>
      </div>
    </>
  );
};

export const CopyCode = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  border: 2px solid #ffffff;
  transition: all, 0.3s;
  background-color: transparent;

  &:before {
    content: '\\f24d';
    margin-right: 5px;
    font-weight: 900;
    font-family: 'Font Awesome 5 Free';
  }

  &:hover {
    background-color: #ffffff;
    color: #333333;
    transition: all, 0.3s;
  }
`;