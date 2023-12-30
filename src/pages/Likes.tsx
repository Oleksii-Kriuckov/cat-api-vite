import { useEffect, useState } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilState, useRecoilValue } from "recoil";
import { likesArray$, removeLikesActions$ } from "../Recoil/atoms";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import { UpButton } from "../Components/UI/Buttons/UpButton";
import { AlertButton } from "../Components/AlertButton/AlertButton";
import GridBackground from "../Components/UI/Grid/GridBackground";

const Likes = () => {
  const likesArray = useRecoilValue(likesArray$);
  const [removeLikesActions, setRemoveLikesActions] =
    useRecoilState(removeLikesActions$);

  const [showAlert, setShowAlert] = useState(false);

  const { addToLikes } = useAddToCategories();

  function clearLogs() {
    setShowAlert(true);
    setRemoveLikesActions([]);
    setTimeout(() => setShowAlert(false), 2000);
  }

  useEffect(() => {
    addToLikes(linkButtonArray[0].alt);
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <>
          <Header class_name="title title_button" title_content="LIKES">
            <div style={{ position: "relative" }}>
              <AlertButton
                disable={removeLikesActions.length === 0}
                state={showAlert}
                click={clearLogs}
              />
            </div>
          </Header>
          {likesArray.length === 0 ? (
            <DefaultState>No item found</DefaultState>
          ) : (
            <>
              <GridOnePage array={likesArray}>
                {likesArray.map((elem) => (
                  <GridBackground
                    key={elem.id}
                    imageUrl={`url(${elem.image.url})`}
                    alt={likesArray[0].alt}
                    id={elem.id}
                  />
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
