import { useState } from "react";
import "./styles/SelectStyle.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { orderArray } from "./DataForSelects";
import { useSortShuffleGallery } from "../../../Hooks/useSortShuffleGallery";
import { useSearchSort } from "../../../Hooks/useSearchSort";
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
  const { shuffle } = useSortShuffleGallery(galleryArray);
  const { sort_From_A_To_Z, sort_From_Z_To_A } = useSearchSort();

  const sortByOrder = (e: any) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Random":
        setCopyGalleryArray(shuffle());
        break;
      case "Desc":
        setCopyGalleryArray(sort_From_A_To_Z(galleryArray, 'mSec'));
        break;
      case "Asc":
        setCopyGalleryArray(sort_From_Z_To_A(galleryArray, 'mSec'));
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
