import React from 'react';
import { css } from '@emotion/react';
import { FaCode } from 'react-icons/fa';
import getLangColor from '@/utils/getLangColor';
import size from '@/data/size.data';

interface IPrism {
  top?: string;
  bottom?: string;
  children?: React.ReactElement;
  className?: string;
}

export const Prism = ({
  children, className, top = '40', bottom = '40',
}: IPrism) => {
  const fileName: string = children.props?.file;
  const language: string = className.replace('language-', '');

  const { Lang, backgroundColor, textColor, } = getLangColor(language);

  const PrismTitleStyle = css({
    backgroundColor,
    color: textColor,
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 900,

    '& > svg': {
      fill: textColor,
      marginRight: '5px',
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      fontSize: size[3],
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      fontSize: size[4],
    },
    '@media (min-width: 801px)': {
      fontSize: size[5],
    },
  });

  const PrismBodyStyle = css({
    backgroundColor,
    padding: '10px',
    paddingTop: '0',
    borderRadius: '0 0 10px 10px',
  });

  return (
    <>
      <div id='post-code-title' css={PrismTitleStyle}>
        <FaCode />
        {
          fileName !== undefined
            ? `${Lang} - ${fileName}`
            : `${Lang}`
        }
      </div>
      <div id='post-code-block' css={PrismBodyStyle}>
        <pre className={className}>
          {children}
        </pre>
      </div>
    </>
  );
};
