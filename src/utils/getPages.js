const getPages = (array, number) => {
  const count = Math.floor(array.length / number) + (Math.floor(array.length % number) > 0 ? 1 : 0);
  const array2 = [];

  for (let i = 0; i < count; i++) {
    array2.push(array.splice(0, number));
  }

  return array2;
};

export default getPages;
