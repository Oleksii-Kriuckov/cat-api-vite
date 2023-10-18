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
import { useSearchSort } from "../Hooks/useSearchSort";
import GridForBreeds from "../Components/UI/Grid/GridForBreeds";
import SelectLimits from "../Components/UI/Select/SelectLimits";
import { usePagination } from "../Hooks/usePagination";
import PageIndicatorBlock from "../Components/UI/Buttons/PrevNextButtons/PageIndicatorBlock";
import { optionArrayForLimitBreeds } from "../Components/UI/Select/DataForSelects";
import { BlackText } from "../Components/UI/Texts/BlackText";
import useFetch from "../Hooks/useFetch";

const Breeds = () => {
  const [breedsArray, setBreedsArray] = useRecoilState(breedsArray$);
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const displayBreed = useRecoilValue(displayArray$);
  const [limit, setLimit] = useRecoilState(limit$);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const checked = useRecoilValue(lightDark$);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessage$);

  const { sliceArray, pageAmount } = usePagination(breedsArray);
  const { sort_From_A_To_Z, sort_From_Z_To_A } = useSearchSort();
  const { getBreeds } = useFetch();

  useEffect(() => {
    if (breedsArray.length === 0) {
      getBreeds();
    }

    return () => {
      setLimit(5);
      setPageNumber(1);
      setErrorMessage("");
    };
  }, []);

  useMemo(() => {
    sliceArray();
  }, [limit, pageNumber, breedsArray]);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="BREEDS">
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
            sortFunction={() =>
              setBreedsArray(sort_From_Z_To_A(breedsArray, "name"))
            }
          />
          
          <SortButton
            class_name={
              checked
                ? "sortButton a-z light light_border"
                : "sortButton a-z dark_background01 dark_border"
            }
            sortFunction={() =>
              setBreedsArray(sort_From_A_To_Z(breedsArray, "name"))
            }
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
