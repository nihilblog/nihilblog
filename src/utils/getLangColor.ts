const langData = {
  html: [ '#f47933', '#ffffff', ],
  js: [ '#e6a323', '#333333', ],
  javascript: [ '#e6a323', '#333333', ],
  ts: [ '#007acc', '#ffffff', ],
  typescript: [ '#007acc', '#ffffff', ],
  css: [ '#007bc9', '#ffffff', ],
  scss: [ '#007bc9', '#ffffff', ],
  python: [ '#007ff4', '#ffffff', ],
  cs: [ '#67217a', '#ffffff', ],
  csharp: [ '#67217a', '#ffffff', ],
  jsx: [ '#61dafb', '#ffffff', ],
  tsx: [ '#007acc', '#ffffff', ],
  bash: [ '#666666', '#ffffff', ],
  json: [ '#666666', '#ffffff', ],
};

const getLangColor = (text: string): string[] => {
  const TEXT = text.toUpperCase();
  const backgroundColor: string = langData[text][0];
  const textColor: string = langData[text][1];

  return [ TEXT, backgroundColor, textColor, ];
};

export default getLangColor;
