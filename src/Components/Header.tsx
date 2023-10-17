import { PropsWithChildren } from "react";
import TitleButton from "./UI/Buttons/TitleButton/TitleButton";
import { SquareButton } from "./UI/Buttons/SquearButton";
import { useNavigate } from "react-router-dom";

type HeaderProps = PropsWithChildren<{
  class_name: string;
  title_content: string | number;
}>;

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header
      className="d-flex"
      style={{ width: "100%", marginBottom: 20, gap: 10 }}
    >
      <div className="d-flex">
        <SquareButton class_name="back_button" onClick={()=> navigate(-1)}/>
        <TitleButton class_name={props.class_name}>
          {props.title_content}
        </TitleButton>
      </div>
      {props.children}
    </header>
  );
};

export default Header;