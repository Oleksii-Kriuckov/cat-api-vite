import { PropsWithChildren } from "react";

type TitleButtonProps = PropsWithChildren<{
  children: string | number;
  class_name: string;
  onClick?: () => void;
}>;

const TitleButton = (props: TitleButtonProps) => {
  return (
    <div className={props.class_name} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default TitleButton;
