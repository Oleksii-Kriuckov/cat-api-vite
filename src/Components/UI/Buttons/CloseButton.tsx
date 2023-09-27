import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type CloseButtonProps = {onClick: () => void};

export const CloseButton = (props: CloseButtonProps) => {
  const isLight = useRecoilValue(lightDark$);
  return (
    <div className={
        isLight
          ? "close_button light_background"
          : "close_button dark_pink_background"
      } 
      onClick={props.onClick}
      ></div>
  )
}