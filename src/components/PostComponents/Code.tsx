import React from 'react';
import { css } from '@emotion/react';
import { FaCode } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Code = ({ children, }: Props) => {
  const CodeStyle = css({
    padding: '5px 7px',
    borderRadius: '5px',
    fontWeight: 500,
    textIndent: '0',
    color: '#ffffff',
    fontSize: '90%',
    backgroundColor: '#555555',
    margin: '0 2px',
    lineHeight: '1',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    '& > svg': {
      fill: '#ffffff',
      marginRight: '5px',
    },
  });

  return (
    <>
      <code css={CodeStyle}><FaCode />{children}</code>
    </>
  );
};
