import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const isLight = useRecoilValue(lightDark$);

  return (
    <button
      className={
        isLight
          ? "back_button light_pink_background"
          : "back_button dark_pink_background"
      }
    onClick={()=> navigate(-1)}></button>
  );
};

export default BackButton;
