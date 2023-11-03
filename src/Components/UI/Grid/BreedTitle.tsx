import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./GridStyle.css";
import { breedInfo$, lightDark$ } from "../../../Recoil/atoms";
import { BreedInfo } from "../../../Types/types";

type NameTitleProps = PropsWithChildren<{
  info: BreedInfo
}>;

export const BreedTitle = (props: NameTitleProps) => {
  const navigate = useNavigate();
  const [breedInfo, setBreedInfo] = useRecoilState(breedInfo$);
  const isLight = useRecoilValue(lightDark$);

  const setInfo = () => {
    setBreedInfo(props.info);
    navigate(`/breeds/${props.info.id}`);
  };

  return (
    <div
      className={
        isLight ? "name_title light_background cursor" : "name_title name_title_dark cursor"
      }
      onClick={setInfo}
    >
      {props.children}
    </div>
  );
};


