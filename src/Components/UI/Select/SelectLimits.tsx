import { limit$, pageNumber$ } from "../../../Recoil/atoms";
import "./styles/SelectStyle.css";
import { useSetRecoilState, useRecoilState } from "recoil";

type SelectLimitsProps = {
  optionArray: string[];
  id: string;
  class_name: string;
};

const SelectLimits = (props: SelectLimitsProps) => {
  const [limit, setLimit] = useRecoilState(limit$);
  const setPageNumber = useSetRecoilState(pageNumber$);

  const changeLimit = (value: any) => {
    setPageNumber(1);
    setLimit(value);
  };

  return (
    // <div>
      <select
        id={props.id}
        className={props.class_name}
        value={limit}
        onChange={(e) => changeLimit(e.target.value)}
      >
        {props.optionArray.map((el, ind) => (
          <option key={el} value={(ind + 1) * 5}>
            {el}
          </option>
        ))}
      </select>
    // </div>
  );
};

export default SelectLimits;
