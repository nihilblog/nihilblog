import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';
import PropTypes from 'prop-types';

export const Box = ({ children, top = '30', bottom = '30', idName, }) => {
  const boxStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: justify;
    letter-spacing: -1px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    border-radius: 10px;
    transition: all 0.3s;

    @media (min-width: 1px) and (max-width: 600px) {
      & p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      {
        idName
          ?
          (
            <div id={idName} css={boxStyle}>
              {children}
            </div>
          )
          :
          (
            <div css={boxStyle}>
              {children}
            </div>
          )
      }
    </>
  );
};

Box.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  children: PropTypes.node,
  idName: PropTypes.string,
};