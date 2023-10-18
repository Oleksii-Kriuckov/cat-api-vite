import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type Props = PropsWithChildren<{
  children: string;
  class_name: string;
  onClick: () => void;
}>;

export const RectButton = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={
        isLight
          ? `${props.class_name} title light_pink_background`
          : `${props.class_name} title dark_pink_background`
      }
      onClick={props.onClick}
    >
      {props.children.toUpperCase()}
    </div>
  );
};
