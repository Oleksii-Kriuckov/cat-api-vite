import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../../Recoil/atoms";
import { PropsWithChildren } from "react";
import "./styles/PageButtonsStyle.css";
import "../../../../AppStyle/adaptive.css"

type Props = PropsWithChildren<{ 
  children: string,
  condition: boolean,
  main_class: string,
  class_disabled: string,
  onClick?: () => void;
}>;

const PageButton = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={
        isLight
          ? props.condition
            ? `page_button ${props.main_class} page_button_light`
            : `small_button disabled ${props.class_disabled} disabled_light`
          : props.condition
          ? `page_button ${props.main_class} page_button_dark`
          : `small_button disabled ${props.class_disabled} disabled_dark`
      }
      onClick={props.onClick}
    >
      {props.children.toUpperCase()}
    </div>
  );
};

export default PageButton;
