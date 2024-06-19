// 千分位,
const Currency = (num) => {
  // if (num !== undefined) {
  //   const parts = num.toString().split('.');
  //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   return parts.join('.');
  // }

  if (num) {
    return new Intl.NumberFormat('zh-tw').format(num);
  }
  return num;
};

export default Currency;
