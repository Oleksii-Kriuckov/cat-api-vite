import { NewAct } from "../Types/types";

export const useShuffleFilter = (array: NewAct[]) => {
  function shuffle() {
    let currentIndex = array.length,
      randomIndex,
      av;
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

  const filterAnimated = () => {
    const res = [...array].filter(
      (el) => el.image.url.substring(el.image.url.length - 3) === "gif"
    );
    return res;
  };

  const filterStatic = () => {
    const res = [...array].filter(
      (el) => el.image.url.substring(el.image.url.length - 3) !== "gif"
    );
    return res;
  };

  return {
    shuffle,
    filterAnimated,
    filterStatic,
  };
};
