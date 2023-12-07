import { PropsWithChildren } from "react";
import { countRows } from "../../../functions/countRows";
import { BreedInfo, NewAct } from "../../../Types/types";
import "./GridStyle.css";

type GridFormProps = PropsWithChildren<{
  array: BreedInfo[] | NewAct[];
  class_name_btn?: string;
  alt?: string;
  removeMessage?: string;
}>

const GridOnePage = (props: GridFormProps) => {
  return (
    <div
      className="grid-lg"
      style={{
        gridTemplateRows: `repeat(${countRows(props.array.length)}, 140px)`,
        marginBottom: 40,
      }}
    >
      {props.children}
    </div>
  );
};
export default GridOnePage;
