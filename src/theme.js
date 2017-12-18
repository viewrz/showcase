const colors = {
  red: '#ed0036',
  orange: '#f79646',
  lightGray: '#efefef',
  darken: 'rgba(0, 0, 0, 0.3)'
};

export default {
  colors: {
    ...colors,
    main: colors.red,
    mainInvert: 'white'
  },
  space: [0, 8, 16, 32, 64, 128, 256],
  gradients: {
    main: `linear-gradient(147deg, ${colors.red}, ${colors.red} 65%, ${
      colors.orange
    })`,
    shadowTop: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 30%, transparent)`,
    shadowBottom: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 30%, transparent)`
  },
  fontWeights: {
    normal: 300,
    bold: 600,
    black: 800
  },
  radii: { regular: 2, pill: 9999 },
  shadows: { regular: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' }
};
