import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { searchingBreeds$, inputValue$ } from "../Recoil/atoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useSearchSort } from "../Hooks/useSearchSort";
import { GridForSearching } from "../Components/UI/Grid/GridForSearching";

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
        <Header class_name="title_button" title_content="SEARCH" />
        {
          searchingBreeds.length === 0 ? (
            <DefaultState>No item found</DefaultState>
          ) : <GridForSearching array={searchingBreeds}/>
        }
      </Section>
    </div>
  );
};

export default Search;
