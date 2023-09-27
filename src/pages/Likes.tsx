import { useEffect } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilValue } from "recoil";
import { likesArray$, removeLikesActions$, lightDark$ } from "../Recoil/atoms";
import GridForm from "../Components/UI/Grid/GridForm";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import { isObjectForArray } from "../Types/isObject";

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
          <Header class_name="title_button" title_content="LIKES" />
          {likesArray.length === 0 ? (
            <DefaultState>No item found</DefaultState>
          ) : isObjectForArray(likesArray[0]) ? (
            <GridForm
              alt={likesArray[0].alt}
              class_name_btn={
                checked ? "like_button light_background" : "like_button dark"
              }
              array={likesArray}
              removeMessage="removed from Likes"
            />
          ) : null}
          <RemoveActionsBlock removeArray={removeLikesActions} />
        </>
      </Section>
    </div>
  );
};

export default Likes;
