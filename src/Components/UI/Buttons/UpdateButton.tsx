import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

const UpdateButton = () => {
  const isLight = useRecoilValue(lightDark$);
  return (
    <button
      className={
        isLight
          ? "update_button light_pink_background"
          : "update_button dark_pink_background"
      }
    ></button>
  );
};

export default UpdateButton;
