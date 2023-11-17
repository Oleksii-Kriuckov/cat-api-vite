import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type Props = PropsWithChildren<{
  children: string;
  class_name: string;
  id: string;
  img?: string;
  img_class?: string;
  padding?: string;
  onClick: () => void;
}>;

export const RectButton = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      id={props.id}
      className={
        isLight
          ? `${props.class_name} light_pink_background`
          : `${props.class_name} dark_pink_background`
      }
      onClick={props.onClick}
    >
      {props.children.toUpperCase()}
    </div>
  );
};
