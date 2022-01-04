import { css } from '@emotion/react';
import size from '@/data/size.data';

export const useImageStyle = (top: string, bottom: string) => {
  return css({
    maxWidth: '940px',
    boxSizing: 'border-box',
    margin: `${top}px auto ${bottom}px auto`,
    display: 'block',
    backgroundColor: '#33333310',
    border: '2px solid #33333330',
    padding: '10px',
    borderRadius: '10px',

    '& > a': {
      border: '2px solid #33333350',
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '10px',
      margin: '20px auto 0 auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 500,
      width: '40%',
      borderRadius: '5px',
      lineHeight: '1',

      '& > span': {
        fontSize: '90%',
        color: 'inherit',
      },

      '& > svg': {
        fill: '#333333',
        marginRight: '10px',
      },

      '&:hover': {
        backgroundColor: '#333333',
        color: '#ffffff',
        border: '2px solid #333333',

        '& > svg': {
          fill: '#ffffff',
        },
      },
    },

    '& > div': {
      '& > img': {
        margin: '0 auto',
        maxWidth: '100%',
        display: 'block',
        borderRadius: '10px',
        border: '5px solid #333333',
        boxSizing: 'border-box',
      },
    },

    '& > figcaption': {
      marginTop: '10px',
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#333333',
      letterSpacing: '-1px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',

      '& > span': {
        fontSize: '90%',
        color: 'inherit',
      },

      '& > svg': {
        fill: '#333333',
        marginRight: '5px',
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      'figcaption, a': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      'figcaption, a': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      'figcaption, a': {
        fontSize: size[3],
      },
    },
  });
};
