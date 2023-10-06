export const dateTransform = () => {
  const dateMiliSec = Date.now();
  const date = new Date(dateMiliSec);
  return `${date.getHours()}:${date.getMinutes()}`;
};
