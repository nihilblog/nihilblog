import React from 'react';
import { css } from '@emotion/react';
import getLangColor from '@/utils/getLangColor';
import size from '@/data/size';

interface Props {
  top?: string;
  bottom?: string;
  children?: React.ReactElement;
}

export const Prism = ({ children, top = '40', bottom = '40', }: Props) => {
  let languageName: string;
  let fileName: string;

  if (children.props.className) {
    languageName = children.props.className;
  } else {
    languageName = 'plaintext';
  }

  if (children.props.file) {
    fileName = children.props.file;
  } else {
    fileName = '';
  }

  const code = children.props.children;

  const language = languageName.replace('language-', '');
  const { Lang, backgroundColor, textColor, } = getLangColor(language);

  const boxStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;

    & > .block-info {
      display: flex;

      & > .lang-name {
        background-color: ${backgroundColor};
        color: ${textColor};
        display: inline-block;
        border-radius: 10px 10px 0 0;
        line-height: 1;
        padding: 10px;
        margin-left: 10px;

        &:before {
          content: '\\f121';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
          margin-right: 5px;
        }
      }

      & > .codeblock-name {
        background-color: ${backgroundColor}90;
        color: ${textColor};
        display: inline-block;
        border-radius: 10px 10px 0 0;
        line-height: 1;
        padding: 10px;
        margin-left: 5px;
        margin-right: 10px;
        flex: 1;
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & .lang-name,
      & .codeblock-name {
        font-size: ${size[1]};
      }
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & .lang-name,
      & .codeblock-name {
        font-size: ${size[2]};
      }
    }

    @media (min-width: 801px) {
      & .lang-name,
      & .codeblock-name {
        font-size: ${size[3]};
      }
    }
  `;

  const codeBlockStyle = css`
    background-color: ${backgroundColor};
    padding: 10px;
    border-radius: 10px;
  `;

  return (
    <div className='post-codeblock' css={boxStyle}>
      <div className='block-info'>
        <span className='lang-name'>{Lang}</span>
        {fileName && <span className='codeblock-name'>{fileName}</span>}
      </div>
      <div css={codeBlockStyle}>
        <pre className={`${languageName}`}>
          <code className={`${languageName}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};
