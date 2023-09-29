import { PropsWithChildren } from "react";
import "./styles/SelectStyle.css";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { breedInfo$ } from "../../../Recoil/atoms";
import { isObjectForInfo } from "../../../Types/isObject";

type SelectProps = PropsWithChildren<{
  children: string;
  optionArray: {}[];
  width: string | number;
  class_name: string;
}>;

const SelectBreeds = (props: SelectProps) => {
  const setBreedInfo = useSetRecoilState(breedInfo$);
  const navigate = useNavigate();

  const changeOption = (e: any) => {
    navigate(`/breeds/${e.target.value}`);
    const res = props.optionArray.filter((item) =>
      isObjectForInfo(item) ? item.id === e.target.value : null
    );
    if (isObjectForInfo(res[0])) setBreedInfo(res[0]);
  };

  return (
    <div className="select_wrapper">
      <select
        style={{ width: props.width }}
        className={props.class_name}
        onChange={(e) => changeOption(e)}
      >
        <option value="">{props.children}</option>
        {props.optionArray.map((elem) =>
          isObjectForInfo(elem) ? (
            <option key={elem.name} value={elem.id}>
              {elem.name}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
};

export default SelectBreeds;
