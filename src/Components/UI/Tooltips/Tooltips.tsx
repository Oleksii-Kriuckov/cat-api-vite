import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { CSSTransition } from "react-transition-group";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import "./style.css";
import { useRef } from "react";

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip disableFocusListener {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#1D1D1D",
    fontSize: 12,
  },
}));

export const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip disableFocusListener {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#282828",
    color: "#fff",
    fontSize: 12,
  },
}));

type Props = {
  open: boolean;
};

export const ManualTooltip = ({ open }: Props) => {
  const isLight = useRecoilValue(lightDark$);
  const tipRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={tipRef}
        in={open}
        timeout={300}
        classNames="tip"
        unmountOnExit
      >
        <div
          ref={tipRef}
          id="manual_tooltip"
          className={isLight ? "light_tooltip" : "dark_tooltip"}
        >
          Click to remove
        </div>
      </CSSTransition>
    </>
  );
};
