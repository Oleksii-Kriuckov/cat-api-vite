import { dateTransform } from "../Components/UI/Buttons/VoteButtons/Data";
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

  const isObject = (value: any): value is { id: string } =>
    typeof value === "object" && typeof value.id === "string";

  const addRemoveAction = (id: string, alt: string, message: string) => {
    const newAction = {
      date: dateTransform(),
      image: { url: "" },
      id,
      message,
      icon: "",
      alt,
    };
    setGalleryArray(
      galleryArray.filter((elem) => {
        if (isObject(elem)) {
          return elem.id !== id;
        }
      })
    );

    setActionInfoArray([newAction, ...actionInfoArray]);

    switch (alt) {
      case "like":
        setLikesArray(
          likesArray.filter((elem) => {
            if (isObject(elem)) {
              return elem.id !== id;
            }
          })
        );
        setRemoveLikesActions([newAction, ...removeLikesActions]);
        break;

      case "favorite":
        setFavoritesArray(
          favoritesArray.filter((elem) => {
            if (isObject(elem)) {
              return elem.id !== id;
            }
          })
        );
        setRemoveFavoritesArray([newAction, ...removeFavoritesArray]);
        break;

      case "dislike":
        setDislikesArray(
          dislikesArray.filter((elem) => {
            if (isObject(elem)) {
              return elem.id !== id;
            }
          })
        );
        setRemoveDislikesArray([newAction, ...removeDislikesArray]);
        break;
    }
  };

  return { addRemoveAction };
};
