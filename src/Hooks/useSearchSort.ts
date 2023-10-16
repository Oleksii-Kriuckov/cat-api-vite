import {
  inputValue$,
  // breedsArray$,
  copyBreedsArray$,
  searchingBreeds$,
} from "../Recoil/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useSearchSort = () => {
  const inputValue = useRecoilValue(inputValue$);
  const  setSearchingBreeds =
  useSetRecoilState(searchingBreeds$);
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);

  const searchBreeds = () => {
    setSearchingBreeds(
      copyBreedsArray.filter((breed) => {
        if (inputValue) {
          return breed.name.toLowerCase().includes(inputValue.toLowerCase());
        }
      })
    );
  };

  const sort_From_Z_To_A = (array: any[], key: string) => {
    const res = [...array].sort((a, b) => (a[key] < b[key] ? 1 : -1));
    return res;
  };

  const sort_From_A_To_Z = (array: any[], key: string) => {
    const res = [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return res;
  };

  return { searchBreeds, sort_From_A_To_Z, sort_From_Z_To_A };
};
