import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  limit$,
  pageNumber$,
  displayArray$,
} from "../Recoil/atoms";
import { NewAct, BreedInfo } from "../Types/types";

export const usePagination = (array: NewAct[] | BreedInfo[]) => {
  const limit = useRecoilValue(limit$);
  const pageNumber = useRecoilValue(pageNumber$);
  const  setDisplayBreed = useSetRecoilState(displayArray$);

  const pageAmount = Math.ceil(array.length / limit);
  
  const sliceArray = () => {
    if (pageNumber < pageAmount) {
      setDisplayBreed(
        array.slice(
          (pageNumber - 1) * limit,
          pageNumber * limit
        )
      );
    }
    if (pageNumber === pageAmount) {
      setDisplayBreed(array.slice((pageNumber - 1) * limit));
    }
  };
  
  return {pageAmount, sliceArray };
};
