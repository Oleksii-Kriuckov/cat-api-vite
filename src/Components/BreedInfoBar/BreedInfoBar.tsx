import { breedInfo$, lightDark$ } from "../../Recoil/atoms";
import { useRecoilValue } from "recoil";
import "./BreedInfoBarStyle.css";
import { BlackText } from "../UI/Texts/BlackText";

const BreedInfoBar = () => {
  const breedInfo = useRecoilValue(breedInfo$);
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      id="breeds_info_bar"
      className={isLight ? "breeds_info_border_light " : "breeds_info_border_dark"}
    >
      <div
        className={
          isLight
            ? "breed_name light_background dark"
            : "breed_name breed_name_dark"
        }
      >
        <BlackText>{breedInfo.name}</BlackText>
      </div>
      <div className="breed_description">{breedInfo.description}</div>
      <div className="d-flex char">
        <div>
          <p className="characteristic">
            {" "}
            <BlackText>Temperament:</BlackText>
          </p>
          <span className="description">{breedInfo.temperament}</span>
        </div>
        <div>
          <p className="characteristic">
            <BlackText>Origin:</BlackText>{" "}
            <span className="description">{breedInfo.origin}</span>
          </p>
          <p className="characteristic">
            <BlackText>Weight: </BlackText>
            <span className="description">{breedInfo.weight.metric} kg</span>
          </p>
          <p className="characteristic">
            <BlackText>Life span: </BlackText>
            <span className="description">{breedInfo.life_span} years</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreedInfoBar;
