import { PropsWithChildren } from "react";

type TitleButtonProps = PropsWithChildren<{ children: string | number, class_name: string }>;

const TitleButton = (props: TitleButtonProps) => {
  return (
    <div className={props.class_name}>
        {props.children}
    </div>
  )
}

export default TitleButton