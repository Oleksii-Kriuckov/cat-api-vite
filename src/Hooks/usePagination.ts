import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  limit$,
  pageNumber$,
  displayArray$,
} from "../Recoil/atoms";

export const usePagination = (array: {}[]) => {
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
