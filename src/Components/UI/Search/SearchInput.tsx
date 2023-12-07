import React from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_ROUTE } from "../../../Router/path";
import { useRecoilValue, useRecoilState } from "recoil";
import { lightDark$, inputValue$ } from "../../../Recoil/atoms";
import { useSearchSort } from "../../../Hooks/useSearchSort";
import { SquareButton } from "../Buttons/SquareButton";
import "./inputStyle.css";

const SearchInput = () => {
  const navigate = useNavigate();
  const isLight = useRecoilValue(lightDark$);
  const [inputValue, setInputValue] = useRecoilState(inputValue$);
  const { searchBreeds } = useSearchSort();

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
    <div
      className="search flex-grow-0 flex-sm-grow-1 flex-md-grow-0"
      style={{ position: "relative" }}
    >
      <input
        type="text"
        className={isLight ? "search_light" : "search_dark"}
        placeholder="Search for breeds"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={pressEnter}
      />

      <SquareButton
        id="search_button"
        class_name_dark="dark_pink_background"
        class_name_light="light_pink_background"
        onClick={search}
      />
    </div>
  );
};

export default SearchInput;
