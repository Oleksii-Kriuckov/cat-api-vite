import { useEffect, useState } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilState, useRecoilValue } from "recoil";
import { dislikesArray$, removeDislikesActions$ } from "../Recoil/atoms";
import { useAddToCategories } from "../Hooks/useAddToCategories";
import { linkButtonArray } from "../Components/UI/Buttons/LinkButtons/LinkButtonData";
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";
import GridOnePage from "../Components/UI/Grid/GridOnePage";
import { UpButton } from "../Components/UI/Buttons/UpButton";
import { AlertButton } from "../Components/AlertButton/AlertButton";
import GridBackground from "../Components/UI/Grid/GridBackground";

const Dislikes = () => {
  const dislikesArray = useRecoilValue(dislikesArray$);
  const removeDislikesActions = useRecoilValue(removeDislikesActions$);
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
              {dislikesArray.map((elem) => (
                <GridBackground
                  key={elem.id}
                  imageUrl={`url(${elem.image.url})`}
                  alt={dislikesArray[0].alt}
                  id={elem.id}
                />
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
