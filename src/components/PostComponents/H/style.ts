import { css } from '@emotion/react';

interface IHStyle {
  topDown: number;
  backColor: string;
  textColor: string;
  spanSize: number;
  fontSize: string[];
}

export const useHStyle = (top: string, bottom: string, styleObj: IHStyle) => {
  return css({
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
    color: styleObj.textColor,
    backgroundColor: styleObj.backColor,
    padding: `${styleObj.topDown}px 10px`,
    borderRadius: '10px',
    letterSpacing: '-1px',

    '& > span': {
      fontSize: `${styleObj.spanSize}%`,
      color: 'inherit',
      fontWeight: 900,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      lineHeight: '1',

      '& > svg': {
        fill: styleObj.textColor,
        marginRight: '10px',
      },

      '& > a': {
        color: '#ffffff30',
        marginLeft: '20px',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        '& > svg': {
          fill: '#ffffff30',
        },

        '&:hover': {
          color: '#ffffff',

          '& > svg': {
            fill: '#ffffff',
          },
        },
      },
    },

    '@media (min-width: 1px) and (max-width: 600px)': {
      fontSize: styleObj.fontSize[0],
    },
    '@media (min-width: 601px) and (max-width: 800px)': {
      fontSize: styleObj.fontSize[1],
    },
    '@media (min-width: 801px)': {
      fontSize: styleObj.fontSize[2],
    },
  });
};
