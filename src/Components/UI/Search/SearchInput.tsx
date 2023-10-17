import React from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_ROUTE } from "../../../Router/path";
import { useRecoilValue, useRecoilState } from "recoil";
import { lightDark$, inputValue$ } from "../../../Recoil/atoms";
import { useSearchSort } from "../../../Hooks/useSearchSort";
import "./inputStyle.css";
import { SquareButton } from "../Buttons/SquearButton";

type SearchInputProps = { width: string | number };

const SearchInput = (props: SearchInputProps) => {
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

      <SquareButton class_name="search_button" onClick={search} />
    </div>
  );
};

export default SearchInput;
