import { PropsWithChildren } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import "./cardStyle.css";

type CardProps = PropsWithChildren<{
  children: string;
  src: string;
  bgColor: string;
  link: string;
}>;

const Card = (props: CardProps) => {
  const match = useMatch(props.link);

  const isLight = useRecoilValue(lightDark$);
  return (
    <div>
      <div
        className="card_back d-none d-sm-flex justify-content-sm-center align-items-sm-center"
        style={{ backgroundColor: props.bgColor }}
      >
        <img src={props.src} alt={props.children} />
      </div>
      <NavLink
        to={props.link}
        className={
          isLight
            ? "card_button light_background pink_hover"
            : "card_button dark_background01 pink_hover_dark"
        }
        style={match ? { backgroundColor: "#ff868e", color: 'white' } : {}}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default Card;
