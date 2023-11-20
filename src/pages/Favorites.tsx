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
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import RemoveButton from "../Components/UI/Buttons/RemoveButton";

const Favorites = () => {
  const favoritesArray = useRecoilValue(favoritesArray$);
  const removeFavoritesArray = useRecoilValue(removeFavoritesActions$);
  const { addToFavorites} = useAddToCategories();
  const checked = useRecoilValue(lightDark$);

  useEffect(() => {
    addToFavorites(linkButtonArray[1].alt);
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="FAVORITES" />
        {favoritesArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : 
          <GridOnePage array={favoritesArray}>
            {favoritesArray.map((elem, ind) =>
          <div
            className="grid_item grid_form"
            key={ind}
            style={{ backgroundImage: `url(${elem.image.url})` }}
          >
            <div className="background_grid_item"></div>
            <RemoveButton
              alt={favoritesArray[0].alt}
              class_name={checked ? "fav_button light_background" : "fav_button dark"}
              id={elem.id}
              message="removed from Favorites"
            />
          </div>
      )}
          </GridOnePage>
      }
        <RemoveActionsBlock removeArray={removeFavoritesArray} />
      </Section>
    </div>
  );
};

export default Favorites;
