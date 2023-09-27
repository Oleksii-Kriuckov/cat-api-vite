import { useEffect } from "react";
import mainPicture from "../Components/Graphic/Images/girl-and-pet.png";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../Recoil/atoms";
import useFetch from "../Hooks/useFetch";
import "../Components/main/mainStyle.css";

const Initial = () => {
  const checked = useRecoilValue(lightDark$);
  const { getRequest } = useFetch("https://api.thecatapi.com/v1/breeds");

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <img
        style={{ width: "100%", position: "absolute", left: 0, top: 0 }}
        src={mainPicture}
        alt="Girl and pet"
      />
      <div
        className={
          checked ? "background background_light" : "background background_dark"
        }
      ></div>
    </>
  );
};

export default Initial;
