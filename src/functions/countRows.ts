export const countRows = (length: number) => {
  let amountRows;
  if (length % 5 === 0 || length % 10 === 9) {
    amountRows = Math.ceil(length / 5) * 3;
  }
  if (length % 10 < 5 && length % 10 > 0) {
    amountRows = ((Math.floor(length / 10) * 10) / 5) * 3 + 2;
  }
  if (length % 10 === 8) {
    amountRows = ((Math.floor(length / 10) * 10) / 5) * 3 + 5;
  }
  if (length % 10 === 6 || length % 10 === 7) {
    amountRows = ((Math.floor(length / 10) * 10) / 5) * 3 + 4;
  }
  return amountRows;
};

export const countLastPageRows = (length: number, limit: number) => {
  let res;
  if (length === 5) {
    return countRows(length);
  } else {
    res = length - Math.floor(length / limit) * limit;
    return countRows(res);
  }
};
