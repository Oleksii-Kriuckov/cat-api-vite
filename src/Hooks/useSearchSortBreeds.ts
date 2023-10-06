import {
  inputValue$,
  breedsArray$,
  copyBreedsArray$,
  searchingBreeds$,
} from "../Recoil/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useSearchSortBreeds = () => {
  const inputValue = useRecoilValue(inputValue$);
  const  setSearchingBreeds =
  useSetRecoilState(searchingBreeds$);
  const breedsArray= useRecoilValue(breedsArray$);
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

  const sortByName_From_Z_To_A = () => {
    const res = [...breedsArray].sort((a, b) => (a["name"] < b["name"] ? 1 : -1));
    return res;
  };

  const sortByName_From_A_To_Z = () => {
    const res = [...breedsArray].sort((a, b) => (a["name"] > b["name"] ? 1 : -1));
    return res;
  };

  return { searchBreeds, sortByName_From_A_To_Z, sortByName_From_Z_To_A };
};
