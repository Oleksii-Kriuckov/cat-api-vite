import "./GalleryBarStyle.css";
import GalleryItem from "./GalleryItem";
import { useRecoilValue } from "recoil";
import { copyBreedsArray$, lightDark$ } from "../../Recoil/atoms";
import {
  optionArrayForLimitGallery,
  orderArray,
  typeArray,
} from "../UI/Select/DataForSelects";
import { SelectCommon } from "../UI/Select/SelectCommon";
import useChange from "../../Hooks/useChange";
// import { SquareButton } from "../UI/Buttons/SquearButton";

const GalleryBar = () => {
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const isLight = useRecoilValue(lightDark$);
  const { changeBreeds, changeLimit, sortByOrder, sortByType } = useChange();

  return (
    <div
    id="gallery_bar"
      className={
        isLight
          ? "d-flex flex-column d-sm-grid light position-relative"
          : "d-flex flex-column d-sm-grid dark_background01 position-relative"
      }
    >
      <GalleryItem title="ORDER">
        <SelectCommon
          id="select_gallery"
          class_name_light="light_background black light_border"
          class_name_dark="dark white dark_border"
          optionArray={orderArray}
          onChange={sortByOrder}
        />
      </GalleryItem>

      <GalleryItem title="TYPE">
        <SelectCommon
          id="select_gallery"
          class_name_light="light_background black light_border"
          class_name_dark="dark white dark_border"
          optionArray={typeArray}
          onChange={sortByType}
        />
      </GalleryItem>

      <GalleryItem title="BREED">
        <SelectCommon
          id="select_gallery"
          optionArray={copyBreedsArray}
          class_name_light="light_background black light_border"
          class_name_dark="dark white dark_border"
          onChange={changeBreeds}
        >
          None
        </SelectCommon>
      </GalleryItem>

      <GalleryItem title="LIMIT">
        <SelectCommon
         id="select_gallery"
         optionArray={optionArrayForLimitGallery}
         class_name_light="light_background black light_border"
         class_name_dark="dark white dark_border"
         onChange={(e) => changeLimit(Number(e.target.value))}
        />
      </GalleryItem>
      {/* <SquareButton id="update_button" class_name="update_button" onClick={()=>(console.log('update'))}/> */}
    </div>
  );
};

export default GalleryBar;
