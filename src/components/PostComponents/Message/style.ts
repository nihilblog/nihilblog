import { css } from '@emotion/react';
import size from '@/data/size.data';

export interface IMessageStyle {
  color: string[];
  word: string;
}

export const useMessageStyle = (top: string, bottom: string, colorType: IMessageStyle) => {
  return css({
    padding: '10px',
    borderRadius: '10px',
    margin: `${top}px 0 ${bottom}px 0`,
    fontSize: '90%',
    backgroundColor: colorType.color[0],
    color: colorType.color[1],
    border: `2px solid ${colorType.color[2]}`,

    '& > .message-title': {
      textAlign: 'left',
      marginBottom: '10px',
      letterSpacing: '-1px',
      color: colorType.color[1],
      display: 'flex',
      flexDirection: 'row',
      lineHeight: '1',
      alignItems: 'center',
      justifyContent: 'flex-start',

      '& > svg': {
        fill: colorType.color[1],
        marginRight: '5px',
      },

      '& > span': {
        fontWeight: 900,
        color: colorType.color[1],
        fontSize: '130%',
      },
    },

    '& > .message-content': {
      color: colorType.color[1],

      '& > p': {
        fontWeight: 500,
        textAlign: 'justify',
        letterSpacing: '-1px',
        textIndent: '10px',
        color: colorType.color[1],
        lineHeight: '1.6',
        margin: '20px 0',

        '&:nth-of-type(1)': {
          marginTop: '0',
        },

        '&:nth-last-of-type(1)': {
          marginBottom: '0',
        },

        '& > strong': {
          color: colorType.color[1],
        },

        '& > a': {
          color: colorType.color[1],
          backgroundColor: `${colorType.color[1]}35`,

          '& > svg': {
            fill: colorType.color[1],
          },

          '&:hover': {
            color: '#ffffff',
            backgroundColor: colorType.color[1],

            '& > svg': {
              fill: '#ffffff',
            },
          },
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      '& p span, & p': {
        fontSize: size[1],
      },
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      '& p span, & p': {
        fontSize: size[2],
      },
    },
    '@media (min-width: 801px)': {
      '& p span, & p': {
        fontSize: size[3],
      },
    },
  });
};
