import { useEffect } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilValue } from "recoil";
import { likesArray$, removeLikesActions$, lightDark$ } from "../Recoil/atoms";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import RemoveButton from "../Components/UI/Buttons/RemoveButton";
import { UpButton } from "../Components/UI/Buttons/UpButton";

const Likes = () => {
  const likesArray = useRecoilValue(likesArray$);
  const removeLikesActions = useRecoilValue(removeLikesActions$);
  const checked = useRecoilValue(lightDark$);

  const { addToLikes } = useAddToCategories();

  useEffect(() => {
    addToLikes(linkButtonArray[0].alt);
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <>
          <Header class_name="title title_button" title_content="LIKES" />
          {likesArray.length === 0 ? (
            <DefaultState>No item found</DefaultState>
          ) : (
            <>
              <GridOnePage array={likesArray}>
                {likesArray.map((elem, ind) => (
                  <div
                    className="grid_item grid_form"
                    key={ind}
                    style={{ backgroundImage: `url(${elem.image.url})` }}
                  >
                    <div className="background_grid_item"></div>
                    <RemoveButton
                      alt={likesArray[0].alt}
                      class_name={
                        checked
                          ? "like_button light_background"
                          : "like_button dark"
                      }
                      id={elem.id}
                      message="removed from Likes"
                    />
                  </div>
                ))}
              </GridOnePage>
              <UpButton />
            </>
          )}
          <RemoveActionsBlock removeArray={removeLikesActions} />
        </>
      </Section>
    </div>
  );
};

export default Likes;
