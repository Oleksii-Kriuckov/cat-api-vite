import { useRecoilValue, useRecoilState } from "recoil";
import { voteResponseData$ } from "../Recoil/selectors";
import {
  galleryArray$,
  actionInfoArray$,
} from "../Recoil/atoms";
import useFetch from "./useFetch";
import { NewAct } from "../Types/types";
import { dateTransform } from "../functions/dateFunctions";

const useAddVote = () => {
  const [galleryArray, setGalleryArray] = useRecoilState(galleryArray$);

  const voteResponseData = useRecoilValue(voteResponseData$);
  const [actionInfoArray, setActionInfoArray] =
    useRecoilState(actionInfoArray$);

  const { getRandomCat } = useFetch();

  const addAction = (
    message: string,
    icon: string,
    alt: string,
    // url?: string
  ) => {
    const newAction: NewAct = {
      alt: "",
      date: dateTransform().date,
      mSec: dateTransform().mSec,
      icon: "",
      id: "",
      image: { url: "" },
      message,
    };
    if (voteResponseData) {
      newAction.alt = alt;
      newAction.icon = icon;
      newAction.id = voteResponseData.id;
      newAction.image.url = voteResponseData.url;
      newAction.message = message;

      if (!actionInfoArray.some(el => el.id === voteResponseData.id)) {
        setActionInfoArray([newAction, ...actionInfoArray]);
        getRandomCat();
        setGalleryArray([...galleryArray, newAction]);
      }
    }
  };
  return { addAction };
};
export default useAddVote;

