import { css } from '@emotion/react';
import size from '@/data/size';

const gruvboxDark = css`
  code[class*="language-"],
  pre[class*="language-"],
  code[class*="plaintext"],
  pre[class*="plaintext"] {
    color: #cccccc; /* fg1 / fg */
    font-family: CascadiaCode, 'Noto Sans KR', sans-serif !important;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[1]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[2]};
    }

    @media (min-width: 801px) {
      font-size: ${size[3]};
    }
  }

  /* Code blocks */
  pre[class*="language-"],
  pre[class*="plaintext"] {
    padding: 1em;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"],
  :not(pre) > code[class*="plaintext"],
  pre[class*="plaintext"] {
    background: #2d2d2d; /* bg0_h */
  }

  /* Inline code */
  :not(pre) > code[class*="language-"],
  :not(pre) > code[class*="plaintext"] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token {
    font-family: CascadiaCode, 'Noto Sans KR', sans-serif !important;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.doctype-tag,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.name,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;

export default gruvboxDark;
