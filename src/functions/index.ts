import { BreedInfo, NewAct } from "../Types/types";

export function generateID() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const dateTransform = () => {
  const mSec = Date.now();
  const date = new Date(mSec);
  const hours =
    date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  return { mSec, date: `${hours}:${minutes}:${seconds}` };
};

export const isObjectBreedInfo = (value: any): value is BreedInfo =>
  typeof value === "object" && typeof value.name === "string";

export const isObjectNewAct = (value: any): value is NewAct =>
  typeof value === "object" && typeof value.date === "string";

export function isObjEmpty (obj: object) {
    return Object.keys(obj).length === 0;
}