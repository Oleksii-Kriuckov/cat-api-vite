import { useRecoilValue, useSetRecoilState } from "recoil";
// import useAddVote from "src/Hooks/useAddAction";
import "./UploadButtonsStyle.css";
import { lightDark$, openModal$ } from "../../../../Recoil/atoms";

type Props = { file: { preview: string} };

export const UploadPhoto = (props: Props) => {
  const setOpenModal = useSetRecoilState(openModal$);
  const isLight = useRecoilValue(lightDark$);
  
  const addPhoto = () => {
      // addAction("", "", "", props.file.path);
      // console.log(props.file.path)
      // console.log(props.file.preview)
      setOpenModal(false);
  };

  return (
    <div
      className={
        isLight
          ? `upload_photo title light_background`
          : `upload_photo title dark_pink_background`
      }
      onClick={() => addPhoto()}
    >
      UPLOAD PHOTO
    </div>
  );
};
