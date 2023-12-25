import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type Props = PropsWithChildren<{
  children: string;
  class_name: string;
  id: string;
  disable?: boolean;
  onClick?: () => void;
}>;

export const RectButton = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      id={props.id}
      className={
        props.disable
          ? isLight
            ? `rect_btn_disabled title_button small_button disabled disabled_light`
            : `rect_btn_disabled title_button small_button disabled disabled_dark`
          : isLight
          ? `${props.class_name} title_button light_pink_background`
          : `${props.class_name} title_button dark_pink_background`
      }
      onClick={!props.disable ? props.onClick : () => {}}
    >
      {props.children.toUpperCase()}
    </div>
  );
};
