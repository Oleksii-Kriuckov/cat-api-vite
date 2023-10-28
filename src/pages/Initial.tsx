import { useEffect } from "react";
import mainPicture from "../Components/Graphic/Images/girl-and-pet.png";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../Recoil/atoms";
import useFetch from "../Hooks/useFetch";
import "../Components/main/mainStyle.css";
import '../AppStyle/adaptive.css'
import Aside from "../Components/Aside/Aside";

const Initial = () => {
  const isLight = useRecoilValue(lightDark$);
  const { getBreeds } = useFetch();

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <>
    <Aside class_name="aside_tablet"/>
    <div className="initial">
      <img
        id="picture"
        style={{ width: "100%", position: "absolute", left: 0, top: 0 }}
        src={mainPicture}
        alt="Girl and pet"
      />
      <div
        className={
          isLight ? "background background_light" : "background background_dark"
        }
      ></div>
    </div>
  </>  
  );
};

export default Initial;
