import { PropsWithChildren } from "react";
import BackButton from "./UI/Buttons/BackButton";
import TitleButton from "./UI/Buttons/TitleButton/TitleButton";

type HeaderProps = PropsWithChildren<{
  class_name: string;
  title_content: string | number;
}>;

const Header = (props: HeaderProps) => {
  return (
    <header
      className="d-flex"
      style={{ width: "100%", marginBottom: 20, gap: 10 }}
    >
      <div className="d-flex">
        <BackButton />
        <TitleButton class_name={props.class_name}>
          {props.title_content}
        </TitleButton>
      </div>
      {props.children}
    </header>
  );
};

export default Header;