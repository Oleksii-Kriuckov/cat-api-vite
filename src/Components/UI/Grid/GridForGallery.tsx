import { useRecoilValue } from "recoil";
import "./GridStyle.css";
import { countLastPageRows } from "../../../functions/countRows";
import { IdTitle } from "./IdTitle";
import { limit$, pageNumber$ } from "../../../Recoil/atoms";
import { isObjectForInfo } from "../../../Types/isObject";

type GridForGalleryProps = { array: {}[]; pageAmount: number };

const GridForGallery = (props: GridForGalleryProps) => {
  const limit = useRecoilValue(limit$);
  const pageNumber = useRecoilValue(pageNumber$);

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows:
          pageNumber !== props.pageAmount
            ? `repeat(${(limit / 5) * 3}, 140px)`
            : `repeat(${countLastPageRows(props.array.length, limit)}, 140px)`,
      }}
    >
      {props.array.map((elem, ind) =>
        isObjectForInfo(elem) ? (
          <div
            className="grid_item for_breeds"
            key={ind}
            style={{ backgroundImage: `url(${elem.image.url})` }}
          >
            {" "}
            <IdTitle>{elem.id}</IdTitle>
          </div>
        ) : null
      )}
    </div>
  );
};

export default GridForGallery;
