import React from 'react';
import { css } from '@emotion/react';
import { FaCode } from 'react-icons/fa';
import getLangColor from '@/utils/getLangColor';
import { size } from '@/data';

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

  const PrismTitleStyle = css`
    margin-top: ${top}px;
    background-color: ${backgroundColor};
    color: ${textColor};
    padding: 10px;
    border-radius: 10px 10px 0 0;
    line-height: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 900;

    & > svg {
      fill: ${textColor};
      margin-right: 5px;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[3]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[4]};
    }

    @media (min-width: 801px) {
      font-size: ${size[5]};
    }
  `;

  const PrismBodyStyle = css`
    margin-bottom: ${bottom}px;
    background-color: ${backgroundColor};
    padding: 0 10px 10px 10px;
    border-radius: 0 0 10px 10px;
  `;

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
