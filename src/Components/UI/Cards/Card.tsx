import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
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
  const checked = useRecoilValue(lightDark$);
  return (
    <div>
      <div
        className="card_back d-flex justify-content-center align-items-center"
        style={{ backgroundColor: props.bgColor }}
      >
        <img src={props.src} alt={props.children} />
      </div>
      <NavLink
        to={props.link}
        className={
          checked
            ? "card_button light_background pink_hover"
            : "card_button dark_background01 pink_hover_dark"
        }
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default Card;
