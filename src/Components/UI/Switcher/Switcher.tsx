import * as React from "react";
import { useRecoilState } from 'recoil';
import { lightDark$ } from "../../../Recoil/atoms";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import './style.css'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 0,
  margin: 0,
  "& .MuiSwitch-switchBase": {
    margin: 4,
    padding: 0,
    transform: "translateX(4px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(18px)",
      "& .MuiSwitch-thumb:before": {
        background: "#FF868E",
        borderRadius: "50px",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#FBE0DC", // : right
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#0f1e3c",
    width: 16,
    height: 16,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      background: "#FF868E",
      borderRadius: "50%",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "rgba(255, 134, 142, 0.2);", // left
    borderRadius: 50,
  },
}));

export default function Switcher() {
  const [checked, setChecked] = useRecoilState(lightDark$);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
      <div className={checked ? "indicator eye" : "indicator eye-close"}></div>
      <FormControlLabel style={{margin: 0}}
        control={
          <MaterialUISwitch
            checked={checked}
            onChange={handleChange}
            sx={{ m: 1 }}
          />
        }
        label=''
      />

    </FormGroup>
  );
}
