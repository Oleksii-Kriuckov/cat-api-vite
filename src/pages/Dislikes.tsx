import  {useEffect} from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import { useRecoilValue } from "recoil";
import { dislikesArray$, removeDislikesActions$, lightDark$ } from "../Recoil/atoms";
import GridForm from "../Components/UI/Grid/GridForm";
import {useAddToCategories} from '../Hooks/useAddToCategories';
import {linkButtonArray} from '../Components/UI/Buttons/LinkButtons/LinkButtonData';
import { RemoveActionsBlock } from "../Components/RemoveActionsBlock";

const Dislikes = () => {
  const dislikesArray = useRecoilValue(dislikesArray$);
  const removeDislikesActions = useRecoilValue(removeDislikesActions$);
  const { addToDislikes} = useAddToCategories();
  const checked = useRecoilValue(lightDark$);

  useEffect(() => {
    addToDislikes(linkButtonArray[2].alt)
  }, []);

  const isObject = (value: any): value is { alt: string } =>
    typeof value === "object" && typeof value.alt === "string";

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="DISLIKES" />
        {dislikesArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : isObject(dislikesArray[0]) ? (
          <GridForm
            alt={dislikesArray[0].alt}
            class_name_btn={checked ? "dislike_button light_background" : 'dislike_button dark'}
            array={dislikesArray}
            removeMessage='removed from Dislikes'
          />
        ) : null}
        <RemoveActionsBlock removeArray={removeDislikesActions}/>
      </Section>
    </div>
  );
};

export default Dislikes;
