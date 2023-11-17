import { PropsWithChildren } from "react";
import TitleButton from "./UI/Buttons/TitleButton/TitleButton";
import { SquareButton } from "./UI/Buttons/SquareButton";
import { useNavigate, useMatch } from "react-router-dom";
import { BREEDS_ROUTE } from "../Router/path";

type HeaderProps = PropsWithChildren<{
  class_name: string;
  title_content: string | number;
}>;

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const match = useMatch({
    path: BREEDS_ROUTE
  })

  return (
    <header
      className={`d-flex justify-content-between 
      flex-column ${match ? 'flex-md-row' : 'flex-sm-row'} align-items-start`}
      style={{ width: "100%", marginBottom: 20, gap: 10 }}
    >
      <div className="d-flex">
        <SquareButton
          id="back_button"
          class_name_dark="dark_pink_background"
          class_name_light="light_pink_background"
          onClick={() => navigate(-1)}
        />
        <TitleButton class_name={props.class_name}>
          {props.title_content}
        </TitleButton>
      </div>

        {props.children}
    </header>
  );
};

export default Header;
