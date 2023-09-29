import { useEffect, useMemo } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
import SelectBreeds from "../Components/UI/Select/SelectBreeds";
import {
  errorMessage$,
  breedsArray$,
  copyBreedsArray$,
  limit$,
  pageNumber$,
  displayArray$,
  lightDark$,
} from "../Recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import SortButton from "../Components/UI/Buttons/sortButton/SortButton";
import { useSearchSortBreeds } from "../Hooks/useSearchSortBreeds";
import GridForBreeds from "../Components/UI/Grid/GridForBreeds";
import SelectLimits from "../Components/UI/Select/SelectLimits";
import { usePagination } from "../Hooks/usePagination";
import PageIndicatorBlock from "../Components/UI/Buttons/PrevNextButtons/PageIndicatorBlock";
import { optionArrayForLimitBreeds } from "../Components/UI/Select/DataForSelects";
import { BlackText } from "../Components/UI/Texts/BlackText";
import breeds from '../Assets/breeds.json'
import useFetch from "../Hooks/useFetch";

const Breeds = () => {
  const [breedsArray, setBreedsArray] = useRecoilState(breedsArray$);
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const displayBreed = useRecoilValue(displayArray$);
  const [limit, setLimit] = useRecoilState(limit$);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const checked = useRecoilValue(lightDark$);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessage$);

  const { sliceArray, pageAmount } = usePagination(breeds);
  const { sortByName_From_Z_To_A, sortByName_From_A_To_Z } =
    useSearchSortBreeds();
    const { getRequest } = useFetch("https://api.thecatapi.com/v1/breeds");

  useEffect(() => {
    if (breedsArray.length === 0) {
      getRequest();
    }

    return () => {
      setLimit(5);
      setPageNumber(1);
      setErrorMessage("");
    };
  }, []);

  useMemo(() => {
    sliceArray();
    // console.log(displayBreed);
  }, [limit, pageNumber, breedsArray]);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title_button" title_content="BREEDS">
          <SelectBreeds
            width={225}
            optionArray={copyBreedsArray}
            class_name={
              checked
                ? "breedsSelect light border_hover light_border"
                : "breedsSelect dark_background01 dark_border"
            }
          >
            All breeds
          </SelectBreeds>
          <SelectLimits
            width={100}
            optionArray={optionArrayForLimitBreeds}
            class_name={
              checked
                ? "breedsSelect light border_hover light_border"
                : "breedsSelect dark_background01 dark_border"
            }
          />
          <SortButton
            class_name={
              checked
                ? "sortButton z-a light light_border"
                : "sortButton z-a dark_background01 dark_border"
            }
            sortFunction={() => setBreedsArray(sortByName_From_Z_To_A())}
          />
          <SortButton
            class_name={
              checked
                ? "sortButton a-z light light_border"
                : "sortButton a-z dark_background01 dark_border"
            }
            sortFunction={() => setBreedsArray(sortByName_From_A_To_Z())}
          />
        </Header>
        {errorMessage !== "" ? (
          <h3 style={{ textAlign: "center", marginTop: 50 }}>
            <BlackText>{errorMessage}</BlackText>
          </h3>
        ) : (
          <>
            <GridForBreeds pageAmount={pageAmount} array={displayBreed} />
            <PageIndicatorBlock pageAmount={pageAmount} />
          </>
        )}
      </Section>
    </div>
  );
};

export default Breeds;
