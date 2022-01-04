import React from 'react';
import { css } from '@emotion/react';
import { FaFileCode } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Name = ({ children, }: Props) => {
  const NameStyle = css({
    padding: '5px 7px',
    borderRadius: '5px',
    fontWeight: 500,
    textIndent: '0',
    fontSize: '90%',
    margin: '0 2px',
    lineHeight: '1',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    backgroundColor: '#555555',

    '& > svg': {
      fill: '#ffffff',
      marginRight: '5px',
    },
  });

  return (
    <>
      <span css={NameStyle}><FaFileCode />{children}</span>
    </>
  );
};
