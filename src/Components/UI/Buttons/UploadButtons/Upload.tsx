import { useRecoilValue } from "recoil";
import "./UploadButtonsStyle.css";
import { lightDark$ } from "../../../../Recoil/atoms";

type Props = { onClick: () => void };

export const Upload = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={
        isLight
          ? "title upload light_pink_background"
          : "title upload dark_pink_background"
      }
      onClick={props.onClick}
    >
      <span>UPLOAD</span>
    </div>
  );
};
