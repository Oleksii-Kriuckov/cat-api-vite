import {
  galleryArray$,
  actionInfoArray$,
  likesArray$,
  favoritesArray$,
  dislikesArray$,
  removeLikesActions$,
  removeFavoritesActions$,
  removeDislikesActions$,
} from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { dateTransform } from "../functions/dateFunctions";

export const useDelete = () => {
  const [likesArray, setLikesArray] = useRecoilState(likesArray$);
  const [favoritesArray, setFavoritesArray] =
    useRecoilState(favoritesArray$);
  const [dislikesArray, setDislikesArray] = useRecoilState(dislikesArray$);
  const [galleryArray, setGalleryArray] = useRecoilState(galleryArray$);
  const [actionInfoArray, setActionInfoArray] =
    useRecoilState(actionInfoArray$);
  const [removeLikesActions, setRemoveLikesActions] =
    useRecoilState(removeLikesActions$);
  const [removeFavoritesArray, setRemoveFavoritesArray] = useRecoilState(
    removeFavoritesActions$
  );
  const [removeDislikesArray, setRemoveDislikesArray] =
    useRecoilState(removeDislikesActions$);

  const addRemoveAction = (id: string, alt: string, message: string) => {
    const newAction = {
      date: dateTransform().date,
      mSec: dateTransform().mSec,
      image: { url: "" },
      id,
      message,
      icon: "",
      alt,
    };

    setGalleryArray(
      galleryArray.filter((elem) => {
          return elem.id !== id;
      })
    );

    setActionInfoArray([newAction, ...actionInfoArray]);

    switch (alt) {
      case "like":
        setLikesArray(
          likesArray.filter((elem) => {
              return elem.id !== id;
          })
        );
        setRemoveLikesActions([newAction, ...removeLikesActions]);
        break;

      case "favorite":
        setFavoritesArray(
          favoritesArray.filter((elem) => {
              return elem.id !== id;
          })
        );
        setRemoveFavoritesArray([newAction, ...removeFavoritesArray]);
        break;

      case "dislike":
        setDislikesArray(
          dislikesArray.filter((elem) => {
              return elem.id !== id;
          })
        );
        setRemoveDislikesArray([newAction, ...removeDislikesArray]);
        break;
    }
  };

  return { addRemoveAction };
};
