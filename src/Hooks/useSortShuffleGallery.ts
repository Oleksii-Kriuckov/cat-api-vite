import { isObjectForInfo } from "../Types/isObject";
import { NewAct } from "../Types/types";

export const useSortShuffleGallery = (array: NewAct[]) => {
  function shuffle() {
    let currentIndex = array.length, randomIndex, av;
    const resArr = [...array];

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * array.length);
      currentIndex--;
      av = resArr[currentIndex];
      if (currentIndex === randomIndex) {
        currentIndex++;
      } else {
        resArr.splice(currentIndex, 1, resArr[randomIndex]);
        resArr.splice(randomIndex, 1, av);
      }
    }
    return resArr;
  }

  const sortById_From_Z_To_A = () => {
    const res = [...array].sort((a, b) => (a["mSec"] < b["mSec"] ? 1 : -1));
    return res;
  };

  const sortById_From_A_To_Z = () => {
    const res = [...array].sort((a, b) => (a["mSec"] > b["mSec"] ? 1 : -1));
    return res;
  };

  const filterAnimated = () => {
    const res = [...array].filter((el) => {
      if (isObjectForInfo(el)) {
        return el.image.url.substring(el.image.url.length - 3) === "gif";
      }
    });
    return res;
  };

  const filterStatic = () => {
    const res = [...array].filter((el) => {
      if (isObjectForInfo(el)) {
        return el.image.url.substring(el.image.url.length - 3) !== "gif";
      }
    });
    return res;
  };

  return {
    shuffle,
    sortById_From_A_To_Z,
    sortById_From_Z_To_A,
    filterAnimated,
    filterStatic,
  };
};
