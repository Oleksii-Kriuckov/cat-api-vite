import { useRecoilValue } from "recoil";
import "./GridStyle.css";
import { countLastPageRows } from "../../../functions/countRows";
// import { IdTitle } from "./IdTitle";
import { limit$, pageNumber$ } from "../../../Recoil/atoms";
import { BreedInfo, NewAct } from "../../../Types/types";
import { PropsWithChildren } from "react";

type GridMultiPageProps = PropsWithChildren<{
  array: BreedInfo[] | NewAct[];
  pageAmount: number;
}>;

const GridMultiPage = (props: GridMultiPageProps) => {
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
      {props.children}
    </div>
  );
};

export default GridMultiPage;
