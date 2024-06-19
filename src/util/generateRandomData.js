function generateRandomData(count) {
  const names = [
    'harries',
    'erica',
    'john',
    'anna',
    'michael',
    'sara',
    'david',
    'lisa',
    'james',
    'mary',
  ];
  const sexes = ['M', 'W'];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomElement(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
  }

  const data = [];

  for (let i = 0; i < count; i += 1) {
    const randomName = getRandomElement(names);
    const randomAge = getRandomInt(18, 65).toString();
    const randomSex = getRandomElement(sexes);
    const randomMoney = getRandomInt(50000, 500000);

    data.push({
      name: randomName,
      age: randomAge,
      sex: randomSex,
      money: randomMoney,
    });
  }

  return data;
}
export default generateRandomData;
