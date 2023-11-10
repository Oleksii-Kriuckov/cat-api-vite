import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SquareButton } from "../UI/Buttons/SquareButton";
import "../UI/Buttons/LinkButtons/LinkButtonStyle.css";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import NavCards from "../UI/Cards/NavCards";
import LogoBar from "../LogoBar/LogoBar";

export function MyOffcanvas() {
  const [show, setShow] = useState(false);
  const isLight = useRecoilValue(lightDark$);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="offcanvas_wrapper">
      <SquareButton
        id="aside_button"
        class_name_dark="link_button dark_background pink_hover_dark"
        class_name_light="link_button light_background pink_hover"
        onClick={handleShow}
      />

      <Offcanvas
        id="offcanvas"
        className={isLight ? "App light" : "App dark"}
        show={show}
        onHide={handleClose}
      >
        <div className="offcan m-auto">
          <SquareButton
            id="close_button"
            class_name_dark="dark_pink_background"
            class_name_light="light_background"
            onClick={handleClose}
          />
          <LogoBar />
          <NavCards />
        </div>
      </Offcanvas>
    </div>
  );
}
