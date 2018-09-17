const themes = [
  {
    name: 'cyan',
    firstTime: true,
    colorPrimary: '#3dc0b0',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#d7f2ef',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
