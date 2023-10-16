import {BreedTitle}from "./BreedTitle";
import { countRows } from "../../../functions/countRows";
import "./GridStyle.css";
import { BreedInfo } from "../../../Types/types";

type GridForBreedsProps = { array: BreedInfo[] };

export const GridForSearching = (props: GridForBreedsProps) => {

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${countRows(props.array.length)}, 140px)`,
        marginBottom: 40,
      }}
    >
      {props.array.map((elem, ind) => (
          <div
            className="grid_item for_breeds"
            key={ind}
            style={{ backgroundImage: `url(${elem.image.url})` }}
          >
            <div className="background_grid_item"></div>
            <BreedTitle info={elem}>{elem.name}</BreedTitle>
          </div>
        ) 
      )}
    </div>
  );
};
