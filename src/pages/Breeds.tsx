import { useEffect, useMemo } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
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
import { usePagination } from "../Hooks/usePagination";
import PageIndicatorBlock from "../Components/UI/Buttons/PrevNextButtons/PageIndicatorBlock";
import { optionArrayForLimitBreeds } from "../Components/UI/Select/DataForSelects";
import { BlackText } from "../Components/UI/Texts/BlackText";
import useFetch from "../Hooks/useFetch";
import { SelectCommon } from "../Components/UI/Select/SelectCommon";
import useChange from "../Hooks/useChange";
import GridMultiPage from "../Components/UI/Grid/GridMultiPage";
import { BreedTitle } from "../Components/UI/Grid/BreedTitle";
import { isObjectBreedInfo } from "../functions";

const Breeds = () => {
  const [breedsArray, setBreedsArray] = useRecoilState(breedsArray$);
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const displayBreed = useRecoilValue(displayArray$);
  const [limit, setLimit] = useRecoilState(limit$);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const isLight = useRecoilValue(lightDark$);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessage$);

  const { sliceArray, pageAmount } = usePagination(breedsArray);
  const { sort_From_A_To_Z, sort_From_Z_To_A } = useSearchSort();
  const { getBreeds } = useFetch();
  const { changeBreeds, changeLimit } = useChange();

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
          <div
            id="breeds_header"
            className="d-flex flex-column flex-sm-row"
            style={{ gap: 10 }}
          >
            <SelectCommon
              id="select_breeds"
              class_name_light="flex-grow-0 flex-sm-grow-1 flex-md-grow-0 breedsSelect light border_hover light_border"
              class_name_dark="flex-grow-0 flex-sm-grow-1 flex-md-grow-0 breedsSelect dark_background01 dark_border"
              optionArray={copyBreedsArray}
              onChange={changeBreeds}
            >
              All breeds
            </SelectCommon>

            <div
              id="limits_sort_wrapper"
              className="d-flex"
              style={{ gap: 10 }}
            >
              <SelectCommon
                id="select_limits_breeds"
                optionArray={optionArrayForLimitBreeds}
                class_name_light="flex-grow-1 flex-sm-grow-0 breedsSelect light border_hover light_border"
                class_name_dark="flex-grow-1 flex-sm-grow-0 breedsSelect dark_background01 dark_border"
                onChange={(e) => changeLimit(Number(e.target.value))}
              />

              <SortButton
                class_name={
                  isLight
                    ? "sortButton z-a light light_border"
                    : "sortButton z-a dark_background01 dark_border"
                }
                sortFunction={() =>
                  setBreedsArray(sort_From_Z_To_A(breedsArray, "name"))
                }
              />

              <SortButton
                class_name={
                  isLight
                    ? "sortButton a-z light light_border"
                    : "sortButton a-z dark_background01 dark_border"
                }
                sortFunction={() =>
                  setBreedsArray(sort_From_A_To_Z(breedsArray, "name"))
                }
              />
            </div>
          </div>
        </Header>
        {errorMessage !== "" ? (
          <h3 style={{ textAlign: "center", marginTop: 50 }}>
            <BlackText>{errorMessage}</BlackText>
          </h3>
        ) : (
          <>
            <GridMultiPage array={displayBreed}>
              {displayBreed.map((elem) => (
                <div
                  className="grid_item for_breeds"
                  key={elem.id}
                  style={{ backgroundImage: `url(${elem.image.url})` }}
                >
                  <div className="background_grid_item"></div>
                  {isObjectBreedInfo(elem) && (
                    <BreedTitle info={elem}>{elem.name}</BreedTitle>
                  )}
                </div>
              ))}
            </GridMultiPage>
            <PageIndicatorBlock pageAmount={pageAmount} />
          </>
        )}
      </Section>
    </div>
  );
};

export default Breeds;
