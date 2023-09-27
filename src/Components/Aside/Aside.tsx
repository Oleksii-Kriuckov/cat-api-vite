import "./styles.css";
import logo from "../Graphic/logo.png";
import logoDark from "../Graphic/Logo-dark.png";
import { GreyTextRegular } from "../UI/Texts/GreyTextRegular";
import Switcher from "../UI/Switcher/Switcher";
import { BlackText } from "../UI/Texts/BlackText";
import NavCards from "../UI/Cards/NavCards";
import { INITIAL_ROUTE } from "../../Router/path";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";

const Aside = () => {
  const navigate = useNavigate();
  const isLight = useRecoilValue(lightDark$);

  return (
    <aside>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginBottom: 70 }}
      >
        <img
          src={isLight ? logo : logoDark}
          alt="logo"
          style={{
            marginLeft: -10,
            cursor: "pointer",
          }}
          onClick={() => navigate(INITIAL_ROUTE)}
        />
        <Switcher />
      </div>
      <h1 className="h1">
        <BlackText>Hi cat lover!</BlackText>{" "}
      </h1>
      <GreyTextRegular marBot={50}>
        Here you will find many information about cat breeds
      </GreyTextRegular>

      <h5 className="h5">
        <BlackText>Lets start using The Cat API</BlackText>
      </h5>
      <NavCards />
    </aside>
  );
};

export default Aside;
