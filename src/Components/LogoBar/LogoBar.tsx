import logo from "../Graphic/logo.png";
import logoDark from "../Graphic/Logo-dark.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import { INITIAL_ROUTE } from "../../Router/path";
import Switcher from "../UI/Switcher/Switcher";

const LogoBar = () => {
  const navigate = useNavigate();
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ marginBottom: 60 }}
    >
      <img
        src={isLight ? logo : logoDark}
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(INITIAL_ROUTE)}
      />
      <Switcher />
    </div>
  );
};

export default LogoBar;
