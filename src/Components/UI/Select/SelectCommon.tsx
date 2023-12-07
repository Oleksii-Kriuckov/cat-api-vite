/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import { BreedInfo } from "../../../Types/types";
import "./styles/SelectStyle.css";

type SelectProps = PropsWithChildren<{
  optionArray: BreedInfo[] | { optionName: string }[] | string[];
  id: string;
  class_name_light: string;
  class_name_dark: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: string;
}>;

export const SelectCommon = (props: SelectProps) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <select
      id={props.id}
      className={isLight ? props.class_name_light : props.class_name_dark}
      onChange={props.onChange}
    >
      {props.children && <option value="">{props.children}</option>}
      {props.optionArray.map((el, ind) => {
        if (el.name) {
          return (
            <option key={el.name} value={el.id}>
              {el.name}
            </option>
          );
        } else if (el.optionName) {
          return (
            <option key={el.optionName} value={(ind + 1) * 5}>
              {el.optionName}
            </option>
          );
        } else return (
            <option key={el} value={el}>
              {el}
            </option>
          );
      })}
    </select>
  );
};
