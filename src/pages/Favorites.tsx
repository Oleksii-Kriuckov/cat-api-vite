import { useEffect } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilValue } from "recoil";
import {
  favoritesArray$,
  removeFavoritesActions$,
  lightDark$,
} from "../Recoil/atoms";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import GridForm from "../Components/UI/Grid/GridForm";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";

const Favorites = () => {
  const favoritesArray = useRecoilValue(favoritesArray$);
  const removeFavoritesArray = useRecoilValue(removeFavoritesActions$);
  const { addToFavorites} = useAddToCategories();
  const checked = useRecoilValue(lightDark$);

  useEffect(() => {
    addToFavorites(linkButtonArray[1].alt);
  }, []);

  const isObject = (value: any): value is { alt: string } =>
    typeof value === "object" && typeof value.alt === "string";

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="FAVORITES" />
        {favoritesArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : 
        // delete isObject, replace GridForm with GridOnePAge
        isObject(favoritesArray[0]) ? (
          <GridForm
            alt={favoritesArray[0].alt}
            class_name_btn={
              checked ? "fav_button light_background" : "fav_button dark"
            }
            removeMessage="removed from Favorites"
            array={favoritesArray}
          />
        ) : null}
        <RemoveActionsBlock removeArray={removeFavoritesArray} />
      </Section>
    </div>
  );
};

export default Favorites;
