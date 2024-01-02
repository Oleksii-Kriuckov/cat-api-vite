import { useRecoilValue } from "recoil";
import { useDelete } from "../../../Hooks/useDelete";
import { lightDark$ } from "../../../Recoil/atoms";
// import { LightTooltip, DarkTooltip } from "../Tooltips/Tooltips";

type RemoveButtonProps = {
  id: string;
  class_name: string;
  alt: string;
  message: string;
  onClose: () => void;
  onOpen: () => void;
};

const RemoveButton = (props: RemoveButtonProps) => {
  const { addRemoveAction } = useDelete();
  const isLight = useRecoilValue(lightDark$);
  return (
    <>
      {isLight ? (
        <div
          id="remove_button"
          className={props.class_name}
          onMouseOver={props.onOpen}
          onMouseLeave={props.onClose}
          onClick={() => addRemoveAction(props.id, props.alt, props.message)}
        />
      ) : (
        <div
          id="remove_button"
          className={props.class_name}
          onMouseOver={props.onOpen}
          onMouseLeave={props.onClose}
          onClick={() => addRemoveAction(props.id, props.alt, props.message)}
        />
      )}
    </>
  );
};

export default RemoveButton;
