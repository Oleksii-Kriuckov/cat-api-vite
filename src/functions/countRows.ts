export const countRowsLg = (length: number) => {
  if (length % 5 === 0 || length % 10 === 9) {
    return Math.ceil(length / 5) * 3;
  }
  if (length % 10 < 5 && length % 10 > 0) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 2;
  }
  if (length % 10 === 8) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 5;
  }
  if (length % 10 === 6 || length % 10 === 7) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 4;
  }
};

export const countRowsSm = (length: number) => {
  if (length % 5 === 0 || length % 5 === 4) {
    return Math.ceil(length / 5) * 3;
  }
  if (length % 10 < 4 && length % 10 > 0) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 2;
  }
  if (length % 10 === 6) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 4;
  }
  if (length % 10 === 7 || length % 10 === 8) {
    return ((Math.floor(length / 10) * 10) / 5) * 3 + 5;
  }
};