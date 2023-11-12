import { PropsWithChildren } from "react";
import {  useRecoilValue } from "recoil";
import "./GridStyle.css";
import { lightDark$ } from "../../../Recoil/atoms";

type NameTitleProps = PropsWithChildren<{ children: string }>;

export const IdTitle = (props: NameTitleProps) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <span
      className={
        isLight ? "name_title light_background" : "name_title name_title_dark"
      }
    >
      {props.children}
    </span>
  );
};