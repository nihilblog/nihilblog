import React from 'react';
import { css } from '@emotion/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import size from '@/data/size';
import { CopyCode } from '@/components/PostComponents/CopyCode';

export const Prism = ({ children, top = 40, bottom = 40, }) => {

  const className = children.props.className;
  const lang = className.replace('language-', '');
  const code = children.props.children.trim();

  const capitalizeLang = lang.toUpperCase();

  let color;

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

  const prismStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    color: #cccccc;
    font-family: CascadiaCode, 'Noto Sans CJK KR', sans-serif !important;
    text-align: left;
    line-height: 1.4;
    tab-size: 4;
    background: #333333;
    padding: 45px 10px 15px 10px;
    border-radius: 0 10px 10px 10px;
    overflow-x: auto;
    position: relative;
    border: 5px solid ${color[0]};
    box-sizing: border-box;

    &:before {
      content: '\\f121  ${capitalizeLang}';
      font-weight: 900;
       font-family: 'Font Awesome 5 Free', sans-serif;
      padding: 5px 10px;
      background-color: ${color[0]};
      color: ${color[1]};
      text-align: center;
      border-radius: 0 0 10px 0;
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      top: -2px;
      left: -2px;
    }

    & div {
      /* color: inherit !important; */

      &:nth-last-of-type(1) {
        /* display: none; */
      }
    }

    & .token {
      font-family: CascadiaCode, 'Noto Sans CJK KR', sans-serif !important;
      font-weight: 400;
    }

    & .line-number {
      color: #ffffff !important;
      margin-right: 20px;
      text-align: right;
      display: inline-block;
      user-select: none;
      opacity: 0.4;
      font-family: CascadiaCode, 'Noto Sans CJK KR', sans-serif !important;
      font-weight: 400;

      & > .number {
        color: inherit;
      }
    }

    & .token.comment,
    & .token.block-comment,
    & .token.prolog,
    & .token.doctype,
    & .token.cdata {
      color: #999999 !important;
    }

    & .token.punctuation,
    & .token.unit,
    & .token.selector.punctuation,
    & .token.punctuation.tag.attr-equals,
    & .token.plain,
    & .token.template-string,
    & .token.parameter,
    & .token.maybe-class-name,
    & .token.tag.punctuation {
      color: #cccccc !important;
    }

    & .token.template-string.punctuation {
      color: #d8da7f !important;
    }

    & .token.tag,
    & .token.attr-name,
    & .token.namespace,
    & .token.deleted {
      color: #e2777a !important;
    }

    & .token.function-name {
      color: #6196cc !important;
    }

    & .token.boolean,
    & .token.number,
    & .token.method.function.property-access,
    & .token.function {
      color: #f08d49 !important;
    }

    & .token.property,
    & .token.class-name,
    & .token.constant,
    & .token.property-access,
    & .token.symbol {
      color: #f8c555 !important;
    }

    & .token.selector,
    & .token.important,
    & .token.atrule,
    & .token.keyword,
    & .token.builtin {
      color: #cc99cd !important;
    }

    & .token.string,
    & .token.char,
    & .token.attr-value,
    & .token.attr-value.punctuation,
    & .token.regex,
    & .token.variable {
      color: #7ec699 !important;
    }

    & .token.operator,
    & .token.entity,
    & .token.url {
      color: #67cdcc !important;
    }

    & .token.important,
    & .token.bold {
      font-weight: bold;
    }
    & .token.italic {
      font-style: italic;
    }

    & .token.entity {
      cursor: help;
    }

    & .token.inserted {
      color: green;
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

  const fontColor = css`
    color: #333333;
  `;

  return (
    <>
      <Highlight {...defaultProps} code={code} language={lang}>
        {({ className, tokens, getLineProps, getTokenProps, }) => (
          <div className='blog-syntax-highlight'>
            <pre className={className} css={prismStyle}>
            <CopyCode code={code} />
              {tokens.map((line, index) => (
                <div key={index} {...getLineProps({ style: { color: 'transparent', }, line, key: index, })}>
                  <span className='line-number'>
                    {
                      (index + 1) < 10
                        ? (
                          <>
                            <span css={fontColor}>0</span>
                            <span className='number'>{index + 1}</span>
                          </>
                        )
                        : index + 1
                    }
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ style: { color: 'transparent', }, token, key, })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </>
  );
};