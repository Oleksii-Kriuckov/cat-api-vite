import { useEffect, useState } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilState, useRecoilValue } from "recoil";
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
import { UpButton } from "../Components/UI/Buttons/UpButton";
import { AlertButton } from "../Components/AlertButton/AlertButton";

const Dislikes = () => {
  const dislikesArray = useRecoilValue(dislikesArray$);
  const removeDislikesActions = useRecoilValue(removeDislikesActions$);
  const isLight = useRecoilValue(lightDark$);
  const [showAlert, setShowAlert] = useState(false);
  const [removeDislikesArray, setRemoveDislikesArray] = useRecoilState(
    removeDislikesActions$
  );
  const { addToDislikes } = useAddToCategories();

  const clearLogs = () => {
    setShowAlert(true);
    setRemoveDislikesArray([]);
    setTimeout(() => setShowAlert(false), 2000);
  };

  useEffect(() => {
    addToDislikes(linkButtonArray[2].alt);
  }, []);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="DISLIKES">
        <div style={{ position: "relative" }}>
            <AlertButton
              disable={removeDislikesArray.length === 0}
              state={showAlert}
              click={clearLogs}
            />
          </div>
        </Header>
        {dislikesArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : (
          <>
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
                      isLight
                        ? "dislike_button light_background"
                        : "dislike_button dark"
                    }
                    id={elem.id}
                    message="removed from Dislikes"
                  />
                </div>
              ))}
            </GridOnePage>
            <UpButton />
          </>
        )}
        <RemoveActionsBlock removeArray={removeDislikesActions} />
      </Section>
    </div>
  );
};

export default Dislikes;
