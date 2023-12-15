import { countRowsLg, countRowsSm } from "../../../functions/countRows";
import { BreedInfo, NewAct } from "../../../Types/types";
import { PropsWithChildren } from "react";
import "./GridStyle.css";

type GridMultiPageProps = PropsWithChildren<{
  array: BreedInfo[] | NewAct[];
}>;

const GridMultiPage = (props: GridMultiPageProps) => {
  return (
    <>
      <div
        className="grid-lg"
        style={{
          gridTemplateRows: `repeat(${countRowsLg(props.array.length)}, 140px)`,
        }}
      >
        {props.children}
      </div>
      
      <div
        className="grid-sm"
        style={{
          gridTemplateRows: `repeat(${countRowsSm(props.array.length)}, 27vw)`,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default GridMultiPage;
