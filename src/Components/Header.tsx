import { PropsWithChildren } from "react";
import TitleButton from "./UI/Buttons/TitleButton/TitleButton";
import { SquareButton } from "./UI/Buttons/SquareButton";
import { useNavigate } from "react-router-dom";

type HeaderProps = PropsWithChildren<{
  class_name: string;
  title_content: string | number;
}>;

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className="d-flex justify-content-between"
      style={{ width: "100%", marginBottom: 20, gap: 10 }}
    >
      <div className="d-flex">
        <SquareButton
          class_name_dark="back_button dark_pink_background"
          class_name_light="back_button light_pink_background"
          onClick={() => navigate(-1)}
        />
        <TitleButton class_name={props.class_name}>
          {props.title_content}
        </TitleButton>
      </div>

      <div className="d-flex" style={{ gap: 10 }}>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
