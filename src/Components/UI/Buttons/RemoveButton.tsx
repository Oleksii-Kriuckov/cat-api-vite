import { useRecoilValue } from "recoil";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useDelete } from "../../../Hooks/useDelete";
import { lightDark$ } from "../../../Recoil/atoms";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#1D1D1D",
    fontSize: 12,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#282828",
    color: "#fff",
    fontSize: 12,
  },
}));

type RemoveButtonProps = {
  id: string;
  class_name: string;
  alt: string;
  message: string;
};

const RemoveButton = (props: RemoveButtonProps) => {
  const { addRemoveAction } = useDelete();
  const isLight = useRecoilValue(lightDark$);

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
        <BootstrapTooltip title="Click to remove" placement="top">
          <div
            className={props.class_name}
            onClick={() => addRemoveAction(props.id, props.alt, props.message)}
          ></div>
        </BootstrapTooltip>
      )}
    </>
  );
};

export default RemoveButton;
