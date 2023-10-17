import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import TitleButton from "../Components/UI/Buttons/TitleButton/TitleButton";
import { breedInfo$ } from "../Recoil/atoms";
import { useRecoilValue } from "recoil";
import BreedInfoBar from "../Components/BreedInfoBar/BreedInfoBar";

export default function BreedInfo() {
  const breedInfo = useRecoilValue(breedInfo$);

   return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title id_button" title_content="BREED">
          <TitleButton class_name="title title_button">
            {breedInfo.id}
          </TitleButton>
        </Header>
        {breedInfo.image.url ? 
        <img
          src={breedInfo.image.url}
          alt="cat"
          style={{ width: "640px",  borderRadius: "20px" }} //height: "360px",
        /> : 
        <div>There is no photo</div>
      }
        <BreedInfoBar/>
      </Section>
    </div>
  );
}
