import React, { PropsWithChildren } from "react";
import "./defaultState.css";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type DefaultStateProps = PropsWithChildren<React.ReactNode>;

const DefaultState = (props: DefaultStateProps) => {
  const checked = useRecoilValue(lightDark$);
  return (
    <div
      className={
        checked ? "defaultState light" : "defaultState dark_background01"
      }
    >
      {props.children}
    </div>
  );
};

export default DefaultState;
