import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRecoilValue, useRecoilState } from "recoil";
import { modal_dark, modal_light, style } from "./styleObj";
import { lightDark$, openModal$ } from "../../Recoil/atoms";
import Dropzone from "../Dropzone/Dropzone";
import { SquareButton } from "../UI/Buttons/SquareButton";
import "./ModalWindow.css";
import { RectButton } from "../UI/Buttons/RectButton";

export default function ModalWindow() {
  const isLight = useRecoilValue(lightDark$);
  const [openModal, setOpenModal] = useRecoilState(openModal$);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <RectButton id="upload" class_name="" onClick={handleOpen}>
        UPLOAD
      </RectButton>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          id="box"
          sx={
            isLight
              ? Object.assign(style, modal_light)
              : Object.assign(style, modal_dark)
          }
        >
          <SquareButton
            id="close_button"
            class_name_dark="dark_pink_background"
            class_name_light="light_pink_background"
            onClick={handleClose}
          />
          <h1 className="modal_h1">Upload a .jpg or .png Cat Image</h1>
          {/* <p className="gray modal_p">
            Any uploads must comply with the{" "}
            <a
              href="https://thecatapi.com/privacy"
              target="_blank"
              className="pink"
              rel="noreferrer"
            >
              upload guidelines
            </a>{" "}
            or face deletion.
          </p> */}
          <Dropzone />
        </Box>
      </Modal>
    </div>
  );
}
