import { GreyTextRegular } from "../UI/Texts/GreyTextRegular";
import { BlackText } from "../UI/Texts/BlackText";
import NavCards from "../UI/Cards/NavCards";
import "./styles.css";
import LogoBar from "../LogoBar/LogoBar";

type AsideProps = { class_name: string };

const Aside = ({ class_name }: AsideProps) => {
  return (
    <aside className={class_name}>
      <LogoBar/>
      <h1 className="h1">
        <BlackText>Hi cat lover!</BlackText>{" "}
      </h1>
      <GreyTextRegular marBot={50}>
        Here you will find many information about cat breeds
      </GreyTextRegular>

      <h5 className="h5">
        <BlackText>Lets start using The Cat API</BlackText>
      </h5>
      <NavCards />
    </aside>
  );
};

export default Aside;
