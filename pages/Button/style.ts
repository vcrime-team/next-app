import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import mediaStyle from '@/utils/mediaStyle';

export const cssButton = (colorVar: string, size: string) => (theme: Theme) => {
  const breakpoints = theme['core-breakpoints'] || [0];
  // sizing
  const radius = theme[`button-radius-${size}`] || theme['button-radius'] || [8];
  const height = theme[`button-height-${size}`] || theme['button-height'] || [40];
  const gap = theme[`button-gap-${size}`] || theme['button-gap'] || [4];
  const paddingX = theme[`button-paddingX-${size}`] || theme['button-paddingX'] || [16];
  const loaderSize = theme[`button-loaderSize-${size}`] || theme['button-loaderSize'] || [24];
  // fonts
  const defFontSize = theme['button-fontSize'] || ['1rem'];
  const fontSize = theme[`button-fontSize-${size}`] || defFontSize;
  const fontWeight = theme['button-fontWeight'];
  // colors
  const color = theme[`button-color-${colorVar}`] || theme['button-color'] || '#00AA5B';
  const fontColor = theme[`button-fontColor-${colorVar}`] || theme['button-fontColor'] || '#fff';
  const defColorActive = theme['button-color:active'];
  const varColorActive = theme[`button-color-${colorVar}:active`];
  const colorActive = (colorVar === 'main' ? defColorActive : varColorActive) || color;
  const defColorHover = theme['button-color:hover'];
  const varColorHover = theme[`button-color-${colorVar}:hover`];
  const colorHover = (colorVar === 'main' ? defColorHover : varColorHover) || color;
  const colorDisabled = theme['button-color:disabled'] || '#E4EBF5';
  const fontColorDisabled = theme['button-fontColor:disabled'] || '#AAB4C8';
  const loaderTop = theme[`button-loaderTop-${colorVar}`] || theme['button-loaderTop'];
  const loaderBottom = theme[`button-loaderBottom-${colorVar}`] || theme['button-loaderBottom'];
  const loaderTopFilled = theme[`button-loaderTop-${colorVar}:filled`] || theme['button-loaderTop:filled'] || '#fff';
  const loaderBottomFilled =
    theme[`button-loaderBottom-${colorVar}:filled`] ||
    theme['button-loaderBottom:filled'] ||
    'rgba(255, 255, 255, 0.7)';

  return css(
    {
      display: 'inline-block',
      verticalAlign: 'middle',
      cursor: 'pointer',
      fontWeight,
      textDecoration: 'none',
      transition: 'background 0.3s ease, borderColor 0.3s ease, color 0.3s ease',
      position: 'relative',
      '[data-n-loader]': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        '[data-n-circular="bottom"] circle': { stroke: loaderBottom },
        '[data-n-circular="top"] circle': { stroke: loaderTop },
      },
      '> span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        transition: 'opacity .3s cubic-bezier(0.63,0.01,0.29,1), transform .3s cubic-bezier(0.63,0.01,0.29,1)',
        whiteSpace: 'nowrap',
      },
      // block property
      '&[data-n-block]': { display: 'block', width: '100%' },
      '&[data-n-loading] > span': {
        opacity: 0,
        transform: 'translate3d(0, -50%, 0)',
      },
      // color switch by variant prop
      border: `1px solid ${color}`,
      backgroundColor: color,
      color: fontColor,
      ':hover': { borderColor: colorHover, backgroundColor: colorHover, color: fontColor },
      ':active': {
        transition: 'background 0s ease, borderColor 0s ease, color 0s ease',
        borderColor: colorActive,
        backgroundColor: colorActive,
        color: fontColor,
      },
      '&[data-n-disabled]': {
        borderColor: colorDisabled,
        backgroundColor: colorDisabled,
        color: fontColorDisabled,
      },
      '&[data-n-variant="filled"] [data-n-loader]': {
        '[data-n-circular="bottom"] circle': { stroke: loaderBottomFilled },
        '[data-n-circular="top"] circle': { stroke: loaderTopFilled },
      },
      '&[data-n-variant="ghost"], &[data-n-variant="text"]': {
        backgroundColor: 'transparent',
        color,
        ':hover': { color: colorHover },
        ':active': { color: colorActive },
        '&[data-n-disabled]': { color: fontColorDisabled },
      },
      '&[data-n-variant="text"]': { borderColor: 'transparent' },
    },
    // responsive sizing
    ...breakpoints.map(
      mediaStyle(idx => ({
        paddingLeft: paddingX[idx],
        paddingRight: paddingX[idx],
        fontSize: fontSize[idx],
        borderRadius: radius[idx],
        height: height[idx],
        '> span': { gap: gap[idx] },
        '[data-n-loader]': { width: loaderSize[idx], height: loaderSize[idx] },
      })),
    ),
  );
};

export const cssIcon = (size: string) => (theme: Theme) => {
  const breakpoints = theme['core-breakpoints'] || [0];
  const iconSize = theme[`button-iconSize-${size}`] || theme['button-iconSize'] || [24];

  return css(
    { flexShrink: 0, transition: 'fill 0.3s ease' },
    ...breakpoints.map(mediaStyle(idx => ({ width: iconSize[idx], height: iconSize[idx] }))),
  );
};
