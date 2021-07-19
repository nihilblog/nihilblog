import React, { useState, useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';
import { A } from '@/components/PostComponents';

export const PostToc = ({ toc, }) => {
  const [ text, setText, ] = useState('열기');
  const [ ulStyle, setUlStyle, ] = useState(css`
    display: none;
    opacity: 0;
  `);
  const [ cName, setCName, ] = useState('');
  const ulRef = useRef(null);
  
  const onClickToggle = useCallback(() => {
    if (text === '접기') {
      setText('열기');
      setCName('show hide');
  
      setTimeout(() => {
        setCName('hide');
      }, 301);
    } else {
      setText('접기');
      setCName('show list-up');
  
      setTimeout(() => {
        setCName('show list-down');
      }, 0);
    }
  }, [ text, ulStyle, ]);
  
  const style = css`
    margin: 80px 0;
    overflow-y: hidden;
    
    & > div {
      padding: 20px 10px;
      background-color: #555555;
      text-align: justify;
      letter-spacing: -1px;
      line-height: 1;
      border-radius: 10px;
      margin-bottom: 10px;
      position: relative;
      z-index: 2;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background-color: #333333;
        transition: all 0.3s;
        
        & > span {
          color: #ffffff;
        }
      }

      & > span {
        font-size: 120%;
        color: #cccccc;
        font-weight: 900;
        
        &:before {
          content: '\\f0ca';
          font-weight: 900;
          font-family: 'Font Awesome 5 Free', sans-serif;
          margin-right: 10px;
        }
      }
    }
    
    & > ul {
      transition: all 0.3s;

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade-out {
        from {
          opacity: 1;

        }
        to {
          opacity: 0;
        }
      }
      
      &.show {
        animation: fade-in 0.3s;
        animation-fill-mode: forwards;
        display: block;
      }
      
      &.list-up {
        transform: translateY(-120%);
      }
      
      &.list-down {
        transform: translateY(0);
      }
      
      &.hide {
        animation: fade-out 0.3s;
        animation-fill-mode: forwards;
        transform: translateY(-120%);
      }
      
      & ul {
        margin-left: 20px;
      }
      
      & li {
        margin: 3px 0;
        
        & > span {
          margin-right: 5px;
          font-weight: 900;
          color: #3f91ff70;
          border-radius: 5px;
          transition: all 0.3s;
        }

        &:hover {
          & > span {
            color: #3f91ff;
            transition: all 0.3s;
          }
        }
      }
    }

    @media (min-width: 1px) and (max-width: 600px) {
      & > div {font-size: ${size[4]};}
      & li {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      & > div {font-size: ${size[5]};}
      & li {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      & > div {font-size: ${size[6]};}
      & li {font-size: ${size[3]};}
    }
  `;
  
  return (
    <>
      {toc.length > 0 && (
        <div id={'post-table-of-contents'} css={style}>
          <div id={'top'} onClick={onClickToggle}>
            <span>목차 {text}</span>
          </div>
          <ul id={'table-of-contents-list'} className={cName} css={ulStyle} ref={ulRef}>
            {toc.map((item, index) => (
              <li key={item.name + item.id}>
                <span>{index + 1}.</span>
                <A href={`#${item.id}`} type={'blog'}>{item.text}</A>
                {item.items.length > 0 && (
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subItem.name + subItem.id}>
                        <span>{index + 1}.{subIndex + 1}.</span>
                        <A href={`#${subItem.id}`} type={'blog'}>{subItem.text}</A>
                        {subItem.items.length > 0 && (
                          <ul>
                            {subItem.items.map((subItem2, subIndex2) => (
                              <li key={subItem2.name + subItem2.id}>
                                <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.</span>
                                <A href={`#${subItem2.id}`} type={'blog'}>{subItem2.text}</A>
                                {subItem2.items.length > 0 && (
                                  <ul>
                                    {
                                      subItem.items.map((lastItem, lastIndex) => (
                                        <li key={lastItem.name + lastItem.id}>
                                          <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.{lastIndex + 1}.</span>
                                          <A href={`#${lastItem.id}`} type={'blog'}>{lastItem.text}</A>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

PostToc.propTypes = {
  toc: PropTypes.array,
};