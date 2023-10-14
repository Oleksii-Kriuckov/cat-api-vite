import { PropsWithChildren } from "react";
import "./styles/SelectStyle.css";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { breedInfo$ } from "../../../Recoil/atoms";
import { BreedInfo } from "../../../Types/types";

type SelectProps = PropsWithChildren<{
  children: string;
  optionArray: BreedInfo[];
  width: string | number;
  class_name: string;
}>;

const SelectBreeds = (props: SelectProps) => {
  const setBreedInfo = useSetRecoilState(breedInfo$);
  const navigate = useNavigate();

  const changeOption = (e: any) => {
    navigate(`/breeds/${e.target.value}`);
    const res = props.optionArray.filter((item) => item.id === e.target.value);
    setBreedInfo(res[0]);
  };

  return (
    <div className="select_wrapper">
      <select
        style={{ width: props.width }}
        className={props.class_name}
        onChange={(e) => changeOption(e)}
      >
        <option value="">{props.children}</option>
        {props.optionArray.map((elem) => (
          <option key={elem.name} value={elem.id}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBreeds;
