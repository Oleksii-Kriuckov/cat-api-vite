import "./GalleryBarStyle.css";
import GalleryItem from "./GalleryItem";
import { useRecoilValue } from "recoil";
import SelectOrder from "../UI/Select/SelectOrder";
import SelectBreeds from "../UI/Select/SelectBreeds";
import SelectLimits from "../UI/Select/SelectLimits";
import { SelectType } from "../UI/Select/SelectType";
import { copyBreedsArray$, lightDark$ } from "../../Recoil/atoms";
import { optionArrayForLimitGallery } from "../UI/Select/DataForSelects";
// import { SquareButton } from "../UI/Buttons/SquearButton";

const GalleryBar = () => {
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={
        isLight
          ? "gallery_bar light position-relative"
          : "gallery_bar dark_background01 position-relative"
      }
    >
      <GalleryItem title="ORDER">
        <SelectOrder width={290} />
      </GalleryItem>

      <GalleryItem title="TYPE">
        <SelectType width={290}>All</SelectType>
      </GalleryItem>

      <GalleryItem title="BREED">
        <SelectBreeds
          width={290}
          optionArray={copyBreedsArray}
          class_name={
            isLight
              ? "gallerySelect light_background black light_border"
              : "gallerySelect dark white dark_border"
          }
        >
          None
        </SelectBreeds>
      </GalleryItem>
      <GalleryItem title="LIMIT">
        <SelectLimits
          width={290} // 240 with UpdateButton
          optionArray={optionArrayForLimitGallery}
          class_name={
            isLight
              ? "gallerySelect light_background black light_border"
              : "gallerySelect dark white dark_border"
          }
        />
      </GalleryItem>
      {/* <SquareButton class_name="update_button" onClick={()=>(console.log('update'))}/> */}
    </div>
  );
};

export default GalleryBar;
