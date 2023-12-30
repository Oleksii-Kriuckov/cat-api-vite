import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import RemoveButton from "../Buttons/RemoveButton";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { ManualTooltip } from "../Tooltips/Tooltips";

type Props = {
  key: string | number;
  imageUrl: string;
  alt: string;
  id: string;
};

const GridBackground = (props: Props) => {
  const [open, setOpen] = useState(false);
  const isLight = useRecoilValue(lightDark$);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div
        className="grid_item grid_form"
        key={props.key}
        style={{ backgroundImage: props.imageUrl }}
        onTouchStart={() => setOpen(true)}
      >
        <div className="background_grid_item" />
        <ManualTooltip open={open}/>
        <RemoveButton
          alt={props.alt}
          class_name={
            isLight ? "dislike_button light_background" : "dislike_button dark"
          }
          id={props.id}
          message="removed from Dislikes"
          // open={open}
          // onClose={() => setOpen(false)}
          // onOpen={() => setOpen(true)}
        />
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
