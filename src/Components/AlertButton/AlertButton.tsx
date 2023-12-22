import { useRef, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import { RectButton } from "../UI/Buttons/RectButton";
import "./style.css";

type Props = PropsWithChildren<{
  // children: string;
  state: boolean;
  disable: boolean;
  click: () => void;
}>;

export function AlertButton({ state, disable, click }: Props) {
  const isLight = useRecoilValue(lightDark$);

  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        in={state}
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
        > Logs are cleared
          {/* {children} */}
        </div>
      </CSSTransition>
      <RectButton
        id="clear_log"
        class_name="rect_btn"
        disable={disable}
        onClick={click}
      >
        Clear log
      </RectButton>
    </div>
  );
}
