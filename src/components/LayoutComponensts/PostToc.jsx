import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import size from '@/data/size';
import { A } from '@/components/PostComponents';

export const PostToc = ({ toc, }) => {
  const [ isDisplay, setIsDisplay, ] = useState(false);
  
  const onClickToggle = useCallback(() => {
    if (isDisplay === true) {
      setIsDisplay(false);
    } else {
      setIsDisplay(true);
    }
  }, [ isDisplay, ]);
  
  const style = css`
    margin: 80px 0;
    
    & > div {
      padding: 20px 10px;
      background-color: #333333;
      text-align: justify;
      letter-spacing: -1px;
      line-height: 1;
      border-radius: 10px;
      margin-bottom: 10px;

      & > span {
        font-size: 120%;
        color: #ffffff;
        font-weight: 900;
      }
    }
    
    & > ul {
      padding: 7px 10px;
      border-radius: 10px;
      border: 2px solid #33333330;
      background-color: #33333310;
      
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
          padding: 0 7px 1.5px 7px;
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
            <span>목차</span>
          </div>
          <ul id={'table-of-contents-list'}>
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