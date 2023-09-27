import { useState } from "react";
import "./styles/SelectStyle.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { orderArray } from "./DataForSelects";
import { useSortShuffleGallery } from "../../../Hooks/useSortShuffleGallery";
import {
  lightDark$,
  galleryArray$,
  copyGalleryArray$,
} from "../../../Recoil/atoms";

type SelectGalleryProps = {
  width: string | number;
};

const SelectOrder = (props: SelectGalleryProps) => {
  const setCopyGalleryArray = useSetRecoilState(copyGalleryArray$);
  const checked = useRecoilValue(lightDark$);
  const [value, setValue] = useState("");
  const galleryArray = useRecoilValue(galleryArray$);
  const { shuffle, sortById_From_A_To_Z, sortById_From_Z_To_A } =
    useSortShuffleGallery(galleryArray);

  const sortByOrder = (e: any) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Random":
        setCopyGalleryArray(shuffle());
        break;
      case "Desc":
        setCopyGalleryArray(sortById_From_A_To_Z());
        break;
      case "Asc":
        setCopyGalleryArray(sortById_From_Z_To_A());
        break;
    }
  };

  return (
    <div className="select_wrapper">
      <select
        style={{ width: props.width }}
        className={
          checked
            ? "gallerySelect light_background black light_border"
            : "gallerySelect dark white dark_border"
        }
        value={value}
        onChange={(e) => sortByOrder(e)}
      >
        {orderArray.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOrder;
