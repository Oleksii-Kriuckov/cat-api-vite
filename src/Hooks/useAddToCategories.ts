import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  galleryArray$,
  likesArray$,
  favoritesArray$,
  dislikesArray$,
} from "../Recoil/atoms";

export const useAddToCategories = () => {
  const  setLikesArray = useSetRecoilState(likesArray$);
  const  setFavoritesArray = useSetRecoilState(favoritesArray$);
  const  setDislikesArray = useSetRecoilState(dislikesArray$);
  const galleryArray = useRecoilValue(galleryArray$);

  const isObject = (value: any): value is { alt: string } =>
    typeof value === "object" && typeof value.alt === "string";

  const addToLikes = (alt: string) => {
    setLikesArray(
      galleryArray.filter((elem) => {
        if (isObject(elem)) {
          return elem.alt === alt;
        }
      })
    );
  };

  const addToFavorites = (alt: string) => {
    setFavoritesArray(
      galleryArray.filter((elem) => {
        if (isObject(elem)) {
          return elem.alt === alt;
        }
      })
    );
  };

  const addToDislikes = (alt: string) => {
    setDislikesArray(
      galleryArray.filter((elem) => {
        if (isObject(elem)) {
          return elem.alt === alt;
        }
      })
    );
  };

  return {
    addToLikes,
    addToFavorites,
    addToDislikes,
  };
};