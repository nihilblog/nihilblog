import React from 'react';
import { css } from '@emotion/react';
import { FaKeyboard } from 'react-icons/fa';

interface Props {
  children?: React.ReactNode;
}

export const Kbd = ({ children, }: Props) => {
  const KbdStyle = css({
    padding: '5px 7px',
    color: '#3f91ff',
    backgroundColor: '#3f91ff20',
    borderRadius: '5px',
    fontWeight: 900,
    fontSize: '90%',
    margin: '0 2px',
    lineHeight: '1',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textIndent: '0',

    '& > svg': {
      fill: '#3f91ff',
      marginRight: '5px',
    },
  });

  return (
    <>
      <kbd css={KbdStyle}><FaKeyboard />{children}</kbd>
    </>
  );
};
