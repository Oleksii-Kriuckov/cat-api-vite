import { useSetRecoilState } from "recoil";
// import useAddVote from "src/Hooks/useAddAction";
import "./UploadButtonsStyle.css";
import { openModal$ } from "../../../../Recoil/atoms";

type Props = { file: {} };

export const UploadPhoto = (props: Props) => {
  const setOpenModal = useSetRecoilState(openModal$);
  const isObject = (
    value: any
  ): value is {
    path: string,
    preview: string
  } => typeof value === "object" && typeof value.path === "string";

  // const { addAction } = useAddVote();
  
  const addPhoto = () => {
    if (isObject(props.file)) {
      // addAction("", "", "", props.file.path);
      // console.log(props.file.preview)
      setOpenModal(false);
    }
  };

  return (
    <div
      className="upload_photo"
      onClick={() => addPhoto()}
    >
      UPLOAD PHOTO
    </div>
  );
};
