import { useEffect } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilValue } from "recoil";
import {
  dislikesArray$,
  removeDislikesActions$,
  lightDark$,
} from "../Recoil/atoms";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import RemoveButton from "../Components/UI/Buttons/RemoveButton";

const Dislikes = () => {
  const dislikesArray = useRecoilValue(dislikesArray$);
  const removeDislikesActions = useRecoilValue(removeDislikesActions$);
  const { addToDislikes } = useAddToCategories();
  const checked = useRecoilValue(lightDark$);

  useEffect(() => {
    addToDislikes(linkButtonArray[2].alt);
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="DISLIKES" />
        {dislikesArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : (
          <GridOnePage array={dislikesArray}>
            {dislikesArray.map((elem, ind) => (
              <div
                className="grid_item grid_form"
                key={ind}
                style={{ backgroundImage: `url(${elem.image.url})` }}
              >
                <div className="background_grid_item"></div>
                <RemoveButton
                  alt={dislikesArray[0].alt}
                  class_name={
                    checked
                      ? "dislike_button light_background"
                      : "dislike_button dark"
                  }
                  id={elem.id}
                  message="removed from Dislikes"
                />
              </div>
            ))}
          </GridOnePage>
        )}
        <RemoveActionsBlock removeArray={removeDislikesActions} />
      </Section>
    </div>
  );
};

export default Dislikes;
