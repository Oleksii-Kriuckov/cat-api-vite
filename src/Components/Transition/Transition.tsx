import React, { useRef, useState, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { actionInfoArray$, lightDark$ } from "../../Recoil/atoms";
import "./style.css";
import { RectButton } from "../UI/Buttons/RectButton";

type Props = PropsWithChildren<{children: string,}>

export default function Transition({children}: Props) {
  const [showAlert, setShowAlert] = useState(false);
  const setActionInfoArray = useSetRecoilState(actionInfoArray$);
  const isLight = useRecoilValue(lightDark$);

  const clearLogs = () => {
    setShowAlert(true);
    setActionInfoArray([]);
    setTimeout(() => setShowAlert(false), 2000);
  };
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        in={showAlert}
        timeout={600}
        classNames="my-node"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          id="alert"
          style={
            isLight
              ? { background: "#ededed", color: "#8C8C8C" }
              : { background: "#3e3e3e", color: "#8C8C8C" }
          }
        >
          {children}
        </div>
      </CSSTransition>
      <RectButton id="clear_log" class_name="rect_btn" onClick={clearLogs}>
        Clear log
      </RectButton>
    </div>
  );
}
