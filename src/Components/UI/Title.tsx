import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren<{
  children: string | number;
  class_name: string;
  onClick?: () => void;
}>;

export const Title = (props: TitleProps) => {
  return (
    <div className={props.class_name} onClick={props.onClick}>
      {props.children}
    </div>
  );
};