import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

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