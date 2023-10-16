import { PropsWithChildren, useState } from "react";
import "./styles/SelectStyle.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { typeArray } from "./DataForSelects";
import { useSortShuffleGallery } from "../../../Hooks/useShuffleFilter";
import {
  pageNumber$,
  copyGalleryArray$,
  galleryArray$,
  lightDark$,
} from "../../../Recoil/atoms";

type SelectTypeProps = PropsWithChildren<{
  children: string;
  width: string | number;
}>;

export const SelectType = (props: SelectTypeProps) => {
  const isLight = useRecoilValue(lightDark$);
  const [selectTypeValue, setSelectTypeValue] = useState("");
  const galleryArray = useRecoilValue(galleryArray$);
  const setCopyGalleryArray = useSetRecoilState(copyGalleryArray$);
  const { filterAnimated, filterStatic } = useSortShuffleGallery(galleryArray);
  const setPageNumber = useSetRecoilState(pageNumber$);

  const sortByType = (e: any) => {
    setPageNumber(1);
    setSelectTypeValue(e.target.value);
    switch (e.target.value) {
      case "All":
        setCopyGalleryArray(galleryArray);
        break;
      case "Static":
        setCopyGalleryArray(filterStatic());
        break;
      case "Animated":
        setCopyGalleryArray(filterAnimated());
        break;
    }
  };

  return (
    <div className="select_wrapper">
      <select
        style={{ width: props.width }}
        className={
          isLight
            ? "gallerySelect light_background black light_border"
            : "gallerySelect dark white dark_border"
        }
        value={selectTypeValue}
        onChange={(e) => sortByType(e)}
      >
        {typeArray.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
};
