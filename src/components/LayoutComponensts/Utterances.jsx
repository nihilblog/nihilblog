import React from 'react';
import { css } from '@emotion/react';

const Utterances = () => {
  const style = css`
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;
    
    & > .utterances {
      width: 100%;
      max-width: 100%;

      & a {
        color: #ffffff;
      }
    }
  `;
  
  return (
    <>
      <div className={'post-comments'} css={style} ref={(element) => {
        if (!element) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'nihilncunia-blog/nihilncunia-blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('theme', 'github-dark');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        element.appendChild(scriptElem);
      }} />
    </>
  );
};

export default Utterances;