import { useRecoilValue } from "recoil";
import { BreedTitle } from "./BreedTitle";
import "./GridStyle.css";
import { limit$, pageNumber$ } from "../../../Recoil/atoms";
import { isObjectForInfo } from "../../../Types/isObject";
import { BreedInfo } from "../../../Types/types";

type GridForBreedsProps = { array: BreedInfo[]; pageAmount: number };

const GridForBreeds = (props: GridForBreedsProps) => {
  const limit = useRecoilValue(limit$);
  const pageNumber = useRecoilValue(pageNumber$);

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows:
          pageNumber !== props.pageAmount
            ? `repeat(${(limit / 5) * 3}, 140px)`
            : `repeat(3, 140px)`,
      }}
    >
      {props.array.map((elem) =>
        //  isObjectForInfo(elem) && (
          <div
            className="grid_item for_breeds"
            key={elem.id}
            style={{ backgroundImage: `url(${elem.image.url})` }}
          >
            <div className="background_grid_item"></div>
            <BreedTitle info={elem}>{elem.name}</BreedTitle>
          </div>
        // ) 
      )}
    </div>
  );
};
export default GridForBreeds;
