import { atom } from "recoil";
import { initialArr, NewAct, BreedInfo } from "../Types/types";

// Actions logs array
export const actionInfoArray$ = atom({
  key: "actionInfoArray",
  default: initialArr,
});

export const breedsArray$ = atom<Array<BreedInfo>>({
  key: "breedsArrayState",
  default: [],
});

export const breedInfo$ = atom<BreedInfo>({
  key: "breedInfoState",
  default: {} as BreedInfo,
});

// It use for options list in select
export const copyBreedsArray$ = atom<Array<BreedInfo>>({
  key: "copyBreedsArrayState",
  default: [],
});

export const copyGalleryArray$ = atom({
  key: "copyGalleryArrayState",
  default: initialArr,
});

export const displayArray$ = atom({
  key: "displayBreedsArrayState",
  default: [{}],
});

export const dislikesArray$ = atom({
  key: "DislikesArrayState",
  default: [{}],
});

export const errorMessage$ = atom({
  key: "errorMessageState",
  default: "",
});

export const favoritesArray$ = atom({
  key: "FavoritesArrayState",
  default: [{}],
});

export const galleryArray$ = atom<NewAct[]>({
  key: "galleryArrayState",
  default: [],
});

export const inputValue$ = atom({
  key: "inputValueState",
  default: "",
});

export const isLoading$ = atom({
  key: "isLoadingState",
  default: false,
});

export const lightDark$ = atom({
  key: "LightDarkState",
  default: false,
});

export const likesArray$ = atom({
  key: "likesArrayState",
  default: [{}],
});

export const limit$ = atom({
  key: "limitState",
  default: 5,
});

export const openModal$ = atom({
  key: "isOpenModalState",
  default: false,
});

export const pageNumber$ = atom({
  key: "pageNumberState",
  default: 1,
});

export const removeActionArray$ = atom({
  key: "removeArrayState",
  default: [{}],
});

export const removeLikesActions$ = atom({
  key: "removeLikesState",
  default: [{}],
});

export const removeFavoritesActions$ = atom({
  key: "removeFavoritesState",
  default: [{}],
});

export const removeDislikesActions$ = atom({
  key: "removeDislikesState",
  default: [{}],
});

export const searchingBreeds$ = atom({
  key: "searchingBreedsState",
  default: [{}],
});

export const voteResponse$ = atom({
  key: "voteResponseState",
  default: {},
});
