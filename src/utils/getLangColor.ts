interface GetColor {
  Lang: string;
  backgroundColor: string;
  textColor: string;
}

const langData = {
  plaintext: [ '#666666', '#ffffff', ],
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

const getLangColor = (text: string): GetColor => {
  let Lang: string;

  if (text === 'plaintext') {
    Lang = 'TEXT';
  } else {
    Lang = text.toUpperCase();
  }

  return {
    Lang,
    backgroundColor: langData[text][0],
    textColor: langData[text][1],
  };
};

export default getLangColor;
