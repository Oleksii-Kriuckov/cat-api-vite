import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import breeds from "../Assets/breeds.json";
import {
  isLoading$,
  breedsArray$,
  pageNumber$,
  limit$,
  displayArray$,
  errorMessage$,
  copyBreedsArray$,
  voteResponse$,
} from "../Recoil/atoms";
import { SEARCH_CAT_API_PATH } from "../Router/path";
import { ErrorResponse } from "react-router-dom";

function useFetch() {
  const setIsLoading = useSetRecoilState(isLoading$);
  const setVoteResponse = useSetRecoilState(voteResponse$);
  const setBreedsArray = useSetRecoilState(breedsArray$);
  const setCopyBreedsArray = useSetRecoilState(copyBreedsArray$);
  const limit = useRecoilValue(limit$);
  const pageNumber = useRecoilValue(pageNumber$);
  const setDisplayBreed = useSetRecoilState(displayArray$);
  const setErrorMessage = useSetRecoilState(errorMessage$);

  const getBreeds = () => {
    setBreedsArray(breeds);
    console.log('setBreedsArray(breeds)')
    setCopyBreedsArray(breeds);
    setDisplayBreed(breeds.slice((pageNumber - 1) * limit, pageNumber * limit));
  };

  const getRandomCat = async () => {
    setIsLoading(true);

    await axios
      .get(SEARCH_CAT_API_PATH)
      .then((response: { data: any[] }) => {
          setErrorMessage("");
          setVoteResponse(response.data[0]);
      })
      .catch(
        (error: ErrorResponse) => {
          setErrorMessage(error.statusText);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { getBreeds, getRandomCat };
}
export default useFetch;
