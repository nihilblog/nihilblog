import { css } from '@emotion/react';
import size from '@/data/size';

const gruvboxDark = css`
  code[class*="language-"],
  pre[class*="language-"],
  code[class*="plaintext"],
  pre[class*="plaintext"] {
    color: #ebdbb2; /* fg1 / fg */
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

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="plaintext"]::-moz-selection,
  pre[class*="plaintext"] ::-moz-selection,
  code[class*="plaintext"]::-moz-selection,
  code[class*="plaintext"] ::-moz-selection {
    color: #fbf1c7; /* fg0 */
    background: #7c6f64; /* bg4 */
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="plaintext"]::selection,
  pre[class*="plaintext"] ::selection,
  code[class*="plaintext"]::selection,
  code[class*="plaintext"] ::selection {
    color: #fbf1c7; /* fg0 */
    background: #7c6f64; /* bg4 */
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
    background: #1d2021; /* bg0_h */
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
  .token.prolog,
  .token.cdata {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: #fb4934; /* red2 */
  }

  .token.operator,
  .token.punctuation,
  .token.attr-name {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
    color: #fabd2f; /* yellow2 */
  }

  .token.entity,
  .token.number,
  .token.symbol {
    color: #d3869b; /* purple2 */
  }

  .token.property,
  .token.constant,
  .token.variable {
    color: #fb4934; /* red2 */
  }

  .token.string,
  .token.char {
    color: #b8bb26; /* green2 */
  }

  .token.attr-value,
  .token.attr-value .punctuation {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.url {
    color: #b8bb26; /* green2 */
    text-decoration: underline;
  }

  .token.function {
    color: #fabd2f; /* yellow2 */
  }

  .token.regex {
    background: #b8bb26; /* green2 */
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
    background: #a89984; /* fg4 / gray1 */
  }

  .token.deleted {
    background: #fb4934; /* red2 */
  }
`;

export default gruvboxDark;
