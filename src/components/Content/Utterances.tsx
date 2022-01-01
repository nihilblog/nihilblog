import React, { useEffect } from 'react';
import { css } from '@emotion/react';

export const Utterances = () => {
  const UtterancesStyle = css({
    backgroundColor: '#333333',
    border: '2px solid #222222',
    padding: '10px',
    borderRadius: '10px',

    '& > .utterances': {
      width: '100%',
      maxWidth: '100%',
      margin: '-16px 0',
      padding: '0 -4px',
    },
  });

  const ID = 'post-comments';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'nihilog/nihilog-code');
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('label', 'blog-comment');
    script.setAttribute('crossorigin', 'anonymous');

    const comments = document.getElementById(ID);
    if (comments) {
      comments.appendChild(script);
    }

    return () => {
      const comments = document.getElementById(ID);
      if (comments) {
        comments.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div id={ID} css={UtterancesStyle} />
    </>
  );
};
