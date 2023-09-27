import "./LinkButtonStyle.css";
import { NavLink, useMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../../Recoil/atoms";

type LinkButtonProps = {
  src: string;
  srcActive: string;
  alt: string;
  link: string;
};

const LinkButton = (props: LinkButtonProps) => {
  const match = useMatch(props.link);
  const isLight = useRecoilValue(lightDark$);

  return (
    <NavLink
      to={props.link}
      className={
        isLight
          ? "link_button light_background pink_hover"
          : "link_button dark_background pink_hover_dark"
      }
    >
      <img src={match ? props.srcActive : props.src} alt={props.alt} />
    </NavLink>
  );
};

export default LinkButton;
