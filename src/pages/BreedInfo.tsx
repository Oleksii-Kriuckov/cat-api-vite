import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import { Title } from "../Components/UI/Title";
import { breedInfo$ } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import BreedInfoBar from "../Components/BreedInfoBar/BreedInfoBar";
import { BreedInfo } from "../Types/types";
import allBreeds from "../assets/breeds.json";
import { isObjEmpty } from "../functions";

export default function BreedInfo() {
  const [breedInfo, setBreedInfo] = useRecoilState(breedInfo$);
  const params = useParams();

  useEffect(() => {
    if (isObjEmpty(breedInfo) ) {
      setBreedInfo(allBreeds.find((breed)=> breed.id === params.id)!);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title_button id_button" title_content="BREED">
          <Title class_name="title title_button">{breedInfo.id}</Title>
        </Header>
        { breedInfo.image ? (
          <>
            <img
              className="breed_info_img"
              src={breedInfo.image.url}
              alt="cat"
              style={{ width: "100%", borderRadius: "20px" }} //height: "360px",
            />
            <BreedInfoBar />
          </>
        ) : (
          <div>There is no photo</div>
        )}
      </Section>
    </div>
  );
}
