import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SquareButton } from "../UI/Buttons/SquareButton";
import "../UI/Buttons/LinkButtons/LinkButtonStyle.css";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import NavCards from "../UI/Cards/NavCards";

export function MyOffcanvas() {
  const [show, setShow] = useState(false);
  const isLight = useRecoilValue(lightDark$);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="offcan">
      <SquareButton
        class_name_dark="link_button aside_button dark_background pink_hover"
        class_name_light="link_button aside_button light_background pink_hover_dark"
        onClick={handleShow}
      />

      <Offcanvas id='we' show={show} onHide={handleClose}>
        <SquareButton
          class_name_dark="close_button dark_pink_background"
          class_name_light="close_button light_background"
          onClick={handleClose}
        />
        <NavCards />
      </Offcanvas>
    </div>
  );
}