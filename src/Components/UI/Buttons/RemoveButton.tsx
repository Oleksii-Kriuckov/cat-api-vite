import { useRecoilValue } from "recoil";
import { useDelete } from "../../../Hooks/useDelete";
import { lightDark$ } from "../../../Recoil/atoms";
import { LightTooltip, DarkTooltip } from "../Tooltips";

type RemoveButtonProps = {
  id: string;
  class_name: string;
  alt: string;
  message: string;
};

const RemoveButton = (props: RemoveButtonProps) => {
  const { addRemoveAction } = useDelete();
  const isLight = useRecoilValue(lightDark$);
// замінити hover tooltip на click tooltip
  return (
    <>
      {isLight ? (
        <LightTooltip title="Click to remove" placement="top">
          <div
            className={props.class_name}
            onClick={() => addRemoveAction(props.id, props.alt, props.message)}
          ></div>
        </LightTooltip>
      ) : (
        <DarkTooltip title="Click to remove" placement="top">
          <div
            className={props.class_name}
            onClick={() => addRemoveAction(props.id, props.alt, props.message)}
          ></div>
        </DarkTooltip>
      )}
    </>
  );
};

export default RemoveButton;
