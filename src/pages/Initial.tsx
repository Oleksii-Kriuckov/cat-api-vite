import { useEffect } from "react";
import mainPicture from "../Components/Graphic/Images/girl-and-pet.png";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../Recoil/atoms";
import useFetch from "../Hooks/useFetch";
import Aside from "../Components/Aside/Aside";
import '../AppStyle/adaptive/desktop.css'
import '../AppStyle/adaptive/tablet.css'

const Initial = () => {
  const isLight = useRecoilValue(lightDark$);
  const { getBreeds } = useFetch();

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <>
    <Aside class_name="aside_mobile"/>
    <div className="initial">
      <img
        style={{ width: "100%", position: "absolute", left: 0, top: 0 }}
        src={mainPicture}
        alt="Girl and pet"
      />
      <div
        className={
          isLight ? "background light_pink_background" : "background dark_background"
        }
      ></div>
    </div>
  </>  
  );
};

export default Initial;
