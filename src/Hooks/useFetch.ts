import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  isLoading$,
  voteResponse$,
  breedsArray$,
  copyBreedsArray$,
  limit$,
  pageNumber$,
  displayArray$,
  errorMessage$
} from "../Recoil/atoms";

function useFetch(url: string) {
  const setIsLoading = useSetRecoilState(isLoading$);
  const setVoteResponse = useSetRecoilState(voteResponse$);
  const setBreedsArray = useSetRecoilState(breedsArray$);
  const setCopyBreedsArray = useSetRecoilState(copyBreedsArray$);
  const limit = useRecoilValue(limit$);
  const pageNumber = useRecoilValue(pageNumber$);
  const  setDisplayBreed = useSetRecoilState(displayArray$);
  const setErrorMessage = useSetRecoilState(errorMessage$);

  const getRequest = async () => {
    setIsLoading(true);

    await axios
      .get(url)
      .then((response) => {
        if (url === "https://api.thecatapi.com/v1/images/search") {
          setVoteResponse(response.data[0]);
        }
        if (url === "https://api.thecatapi.com/v1/breeds") {
          const res = response.data;
          console.log(res);
          
          res.splice(30, 1);
          res.splice(40, 1);

          setErrorMessage("");
          setBreedsArray(res);
          setCopyBreedsArray(res);
          setDisplayBreed(
            res.slice((pageNumber - 1) * limit, pageNumber * limit)
          );
        }
      })
      .catch((error) => {
        setErrorMessage(error.toJSON().message)
        // console.log(error.toJSON().message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { getRequest };
}
export default useFetch;
