import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type Props = {
  id: string;
  class_name_light: string;
  class_name_dark: string;
  onClick: () => void;
};

export const SquareButton = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      id={props.id}
      className={
        isLight ? `${props.class_name_light}` : `${props.class_name_dark}`
      }
      onClick={props.onClick}
    />
  );
};
