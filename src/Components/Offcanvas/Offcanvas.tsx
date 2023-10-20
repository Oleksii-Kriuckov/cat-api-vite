import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SquareButton } from "../UI/Buttons/SquareButton";
import "../UI/Buttons/LinkButtons/LinkButtonStyle.css";

export function MyOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="offcan">
      <SquareButton
        class_name_dark="link_button aside_button dark_background pink_hover"
        class_name_light="link_button aside_button light_background pink_hover_dark"
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
