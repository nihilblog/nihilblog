type IType = ('blog' | 'normal' | 'youtube');

const getColor = (type: IType) => {
  let colorArray: string[] = [];

  if (type === 'blog') {
    colorArray.push('#3f91ff');
    colorArray.push('#3f91ff30');
  } else if (type === 'normal') {
    colorArray.push('#11b32c');
    colorArray.push('#11b32c30');
  } else if (type === 'youtube') {
    colorArray.push('#c30505');
    colorArray.push('#c3050530');
  }

  return colorArray;
};

export default getColor;
