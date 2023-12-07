import { useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import {Title} from "../Components/UI/Title";
import { breedInfo$, breedsArray$ } from "../Recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import BreedInfoBar from "../Components/BreedInfoBar/BreedInfoBar";
import useFetch from "../Hooks/useFetch";
import { BreedInfo } from "../Types/types";

export default function BreedInfo() {
  const [breedInfo, setBreedInfo ]= useRecoilState(breedInfo$);
  const [breedsArray, setBreedsArray] = useRecoilState(breedsArray$);
  const { getBreeds } = useFetch();
  const params = useParams()

  // useEffect(() => {
  //   console.log(params.id)
  //   if (breedsArray.length === 0) {
  //     getBreeds();
  //     const breed = breedsArray.find(breed => breed.id === params.id)
  //     console.log(breedsArray)
  //     setBreedInfo(breed!)
  //   }
  
  //   return () => {
  //     setBreedInfo({} as BreedInfo)
  //   }
  // }, [])
  
   return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title_button id_button" title_content="BREED">
          <Title class_name="title title_button">
            {breedInfo.id}
          </Title>
        </Header>
        {(breedInfo && breedInfo.image) ? 
        <img
          className="breed_info_img"
          src={breedInfo.image.url}
          alt="cat"
          style={{ width: "100%",  borderRadius: "20px" }} //height: "360px",
        /> : 
        <div>There is no photo</div>
      }
        <BreedInfoBar/>
      </Section>
    </div>
  );
}
