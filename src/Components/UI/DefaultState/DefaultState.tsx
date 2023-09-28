import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import "./defaultState.css";

type DefaultStateProps = {children: string};

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
