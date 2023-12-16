import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { searchingBreeds$, inputValue$ } from "../Recoil/atoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useSearchSort } from "../Hooks/useSearchSort";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import { BreedTitle } from "../Components/UI/Grid/BreedTitle";
import { UpButton } from "../Components/UI/Buttons/UpButton";

const Search = () => {
  const [searchingBreeds, setSearchingBreeds] =
    useRecoilState(searchingBreeds$);
  const setInputValue = useSetRecoilState(inputValue$);
  const { searchBreeds } = useSearchSort();

  useEffect(() => {
    searchBreeds();

    return () => {
      setInputValue("");
      setSearchingBreeds([]);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="SEARCH" />
        {searchingBreeds.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : (
          <>
            <GridOnePage array={searchingBreeds}>
              {searchingBreeds.map((elem, ind) => (
                <div
                  className="grid_item for_breeds"
                  key={ind}
                  style={{ backgroundImage: `url(${elem.image.url})` }}
                >
                  <div className="background_grid_item"></div>
                  <BreedTitle info={elem}>{elem.name}</BreedTitle>
                </div>
              ))}
            </GridOnePage>
            <UpButton />
          </>
        )}
      </Section>
    </div>
  );
};

export default Search;
