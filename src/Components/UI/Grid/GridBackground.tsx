import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import RemoveButton from "../Buttons/RemoveButton";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { ManualTooltip } from "../Tooltips/Tooltips";
import { KindButtons } from "../Buttons/LinkButtons/LinkButtonData";

type Props = {
  key: string | number;
  kindButton: KindButtons;
  imageUrl: string;
  alt: string;
  id: string;
};

const GridBackground = (props: Props) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const isLight = useRecoilValue(lightDark$);

  return (
    <ClickAwayListener onClickAway={() => setOpenTooltip(false)}>
      <div
        className="grid_item grid_form"
        key={props.key}
        style={{ backgroundImage: props.imageUrl }}
        onTouchEnd={() => setOpenTooltip(true)}
        onTouchCancel={() => setVisibleBtn(true)}
        onMouseEnter={() => setVisibleBtn(true)}
        onMouseLeave={() => setVisibleBtn(false)}
      >
        <div className="background_grid_item" />
        <ManualTooltip open={openTooltip} />
        {visibleBtn ? (
          <RemoveButton
            alt={props.alt}
            class_name={
              isLight
                ? `${props.kindButton} light_background`
                : `${props.kindButton} dark`
            }
            id={props.id}
            message="removed from Dislikes"
            onClose={() => setOpenTooltip(false)}
            onOpen={() => setOpenTooltip(true)}
          />
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default GridBackground;

{
  /* <Grid item>
  <ClickAwayListener onClickAway={() => setOpen(false)}>
    <div className="wrap" onTouchStart={() => setOpen(true)}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        // disableFocusListener
        // disableHoverListener
        // disableTouchListener
        title="Add"
      >
        <Button onMouseOver={() => setOpen(true)}>Click</Button>
      </Tooltip>
    </div>
  </ClickAwayListener>
</Grid>; */
}
