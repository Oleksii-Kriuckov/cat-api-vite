import { useRecoilValue } from "recoil";
import "./UploadButtonsStyle.css";
import { lightDark$ } from "../../../../Recoil/atoms";

type Props = { onClick: () => void };

export const Upload = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={
        isLight ? "upload light_pink_background" : "upload dark_pink_background"
      }
      onClick={props.onClick}
    >
      <span>UPLOAD</span>
    </div>
  );
};
