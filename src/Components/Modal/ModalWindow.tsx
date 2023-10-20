import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRecoilValue, useRecoilState } from "recoil";
import "./ModalWindow.css";
import { modal_dark, modal_light, style } from "./styleObj";
import { lightDark$, openModal$ } from "../../Recoil/atoms";
import { Upload } from "../UI/Buttons/UploadButtons/Upload";
import Dropzone from "../Dropzone/Dropzone";
import { SquareButton } from "../UI/Buttons/SquareButton";

export default function ModalWindow() {
  const isLight = useRecoilValue(lightDark$);
  const [openModal, setOpenModal] = useRecoilState(openModal$);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div style={{ marginLeft: "auto" }}>
      <Upload onClick={handleOpen} />

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            isLight
              ? Object.assign(style, modal_light)
              : Object.assign(style, modal_dark)
          }
        >
          <SquareButton
            class_name_dark="close_button dark_pink_background"
            class_name_light="close_button light_background"
            onClick={handleClose}
          />
          <h1 className="modal_h1">Upload a .jpg or .png Cat Image</h1>
          <p className="gray modal_p" style={{ fontWeight: 400 }}>
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
          </p>
          <Dropzone />
        </Box>
      </Modal>
    </div>
  );
}
