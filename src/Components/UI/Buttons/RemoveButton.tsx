import { useRecoilValue } from "recoil";
import { useDelete } from "../../../Hooks/useDelete";
import { lightDark$ } from "../../../Recoil/atoms";
import { LightTooltip, DarkTooltip } from "../Tooltips/Tooltips";

type RemoveButtonProps = {
  id: string;
  class_name: string;
  alt: string;
  message: string;
  // open: boolean;
  // onClose: () => void;
  // onOpen: () => void;
};

const RemoveButton = (props: RemoveButtonProps) => {
  const { addRemoveAction } = useDelete();
  const isLight = useRecoilValue(lightDark$);
  return (
    <>
      {isLight ? (
        <LightTooltip
          title="Click to remove"
          placement="top"
          PopperProps={{
          disablePortal: true,
        }}
          disableTouchListener
          // open={props.open}
          // onClose={props.onClose}
        >
          <div
            id="remove_button"
            className={props.class_name}
            onClick={() => addRemoveAction(props.id, props.alt, props.message)}
          />
        </LightTooltip>
      ) : (
        <DarkTooltip
          title="Click to remove"
          placement="top"
          PopperProps={{
            disablePortal: true,
          }}
          disableTouchListener
          // open={props.open}
          // onClose={props.onClose}
        >
          <div
            id="remove_button"
            className={props.class_name}
            onClick={() => addRemoveAction(props.id, props.alt, props.message)}
          />
        </DarkTooltip>
      )}
    </>
  );
};

export default RemoveButton;
