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

  const isObject = (value: any): value is { name: string } =>
    typeof value === "object" && typeof value.name === "string";

  const searchBreeds = () => {
    setSearchingBreeds(
      copyBreedsArray.filter((breed: {}) => {
        if (inputValue && isObject(breed)) {
          return breed.name.toLowerCase().includes(inputValue.toLowerCase());
        }
      })
    );
  };

  const sortByName_From_Z_To_A = () => {
    const res = [...breedsArray].sort((a, b) => (a["name"] < b["name"] ? 1 : -1));
    console.log("sortByName_From_Z_To_A");
    return res;
  };

  const sortByName_From_A_To_Z = () => {
    const res = [...breedsArray].sort((a, b) => (a["name"] > b["name"] ? 1 : -1));
    console.log("sortByName_From_A_To_Z");
    return res;
  };

  return { searchBreeds, sortByName_From_A_To_Z, sortByName_From_Z_To_A };
};
