import React from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_ROUTE } from "../../../Router/path";
import { useRecoilValue, useRecoilState } from "recoil";
import { lightDark$, inputValue$} from "../../../Recoil/atoms";
import { useSearchSortBreeds } from "../../../Hooks/useSearchSortBreeds";
import "./inputStyle.css";

type SearchInputProps = { width: string | number };

const SearchInput = (props: SearchInputProps) => {
  const navigate = useNavigate();
  const isLight = useRecoilValue(lightDark$);
  const [inputValue, setInputValue] = useRecoilState(inputValue$);
  const { searchBreeds } = useSearchSortBreeds();

  const search = () => {
    searchBreeds();
    navigate(SEARCH_ROUTE);
  };
  const pressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div style={{ position: "relative", width: props.width }}>
      <input
        type="text"
        className={isLight ? "search search_light" : "search search_dark"}
        placeholder="Search for breeds by name"
        style={{ width: props.width }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={pressEnter}
      />

      <button
        onClick={search}
        className={
          isLight
            ? "search_button light_pink_background"
            : "search_button dark_pink_background"
        }
      ></button>
    </div>
  );
};

export default SearchInput;
