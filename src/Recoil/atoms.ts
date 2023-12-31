import { atom } from "recoil";
import { NewAct, BreedInfo } from "../Types/types";

// Actions logs array
export const actionInfoArray$ = atom<Array<NewAct>>({
  key: "actionInfoArray",
  default: [],
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

export const copyGalleryArray$ = atom<Array<NewAct>>({
  key: "copyGalleryArrayState",
  default: [],
});

export const displayArray$ = atom<BreedInfo[] | NewAct[]>({
  key: "displayBreedsArrayState",
  default: [],
});

export const dislikesArray$ = atom<Array<NewAct>>({
  key: "DislikesArrayState",
  default: [],
});

export const errorMessage$ = atom({
  key: "errorMessageState",
  default: "",
});

export const favoritesArray$ = atom<Array<NewAct>>({
  key: "FavoritesArrayState",
  default: [],
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

export const likesArray$ = atom<Array<NewAct>>({
  key: "likesArrayState",
  default: [],
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

export const removeActionArray$ = atom<NewAct[]>({
  key: "removeArrayState",
  default: [],
});

export const removeDislikesActions$ = atom<NewAct[]>({
  key: "removeDislikesState",
  default: [],
});

export const removeFavoritesActions$ = atom<NewAct[]>({
  key: "removeFavoritesState",
  default: [],
});

export const removeLikesActions$ = atom<NewAct[]>({
  key: "removeLikesState",
  default: [],
});

export const searchingBreeds$ = atom<Array<BreedInfo>>({
  key: "searchingBreedsState",
  default: [],
});

export const voteResponse$ = atom({
  key: "voteResponseState",
  default: {},
});
