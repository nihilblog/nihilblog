import React from 'react';
import { css } from '@emotion/react';
import { FaCommentAlt } from 'react-icons/fa';
import size from '@/data/size.data';

interface IDt {
  children: React.ReactNode;
}

export const Dt = ({ children, }: IDt) => {
  const DtStyle = css({
    marginTop: '10px',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    backgroundColor: '#555555',
    color: '#ffffff',
    textAlign: 'justify',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    lineHeight: '1',

    '& > svg': {
      fill: '#ffffff',
      marginRight: '5px',
    },

    '& > span': {
      color: 'inherit',
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      fontSize: size[2],
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      fontSize: size[3],
    },
    '@media (min-width: 801px)': {
      fontSize: size[4],
    },
  });

  return (
    <>
      <dt css={DtStyle}>
        <FaCommentAlt />
        <span>{children}</span>
      </dt>
    </>
  );
};
