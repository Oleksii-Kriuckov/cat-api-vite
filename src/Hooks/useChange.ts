import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  breedInfo$,
  copyBreedsArray$,
  copyGalleryArray$,
  galleryArray$,
  limit$,
  pageNumber$,
} from "../Recoil/atoms";
import { useSearchSort } from "./useSearchSort";
import { useShuffleFilter } from "./useShuffleFilter";

const useChange = () => {
  const galleryArray = useRecoilValue(galleryArray$);
  const copyBreedsArray = useRecoilValue(copyBreedsArray$);
  const setBreedInfo = useSetRecoilState(breedInfo$);
  const setLimit = useSetRecoilState(limit$);
  const setPageNumber = useSetRecoilState(pageNumber$);
  const setCopyGalleryArray = useSetRecoilState(copyGalleryArray$);

  const navigate = useNavigate();
  const { shuffle } = useShuffleFilter(galleryArray);
  const { sort_From_A_To_Z, sort_From_Z_To_A } = useSearchSort();
  const { filterAnimated, filterStatic } = useShuffleFilter(galleryArray);

  const changeBreeds = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/breeds/${e.target.value}`);
    const res = copyBreedsArray.find((item) => item.id === e.target.value);
    setBreedInfo(res!);
  };

  const changeLimit = (value: number) => {
    setPageNumber(1);
    setLimit(value);
  };

  const sortByOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "Random":
        setCopyGalleryArray(shuffle());
        break;
      case "Desc":
        setCopyGalleryArray(sort_From_A_To_Z(galleryArray, "mSec"));
        break;
      case "Asc":
        setCopyGalleryArray(sort_From_Z_To_A(galleryArray, "mSec"));
        break;
    }
  };

  const sortByType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageNumber(1);
    switch (e.target.value) {
      case "All":
        setCopyGalleryArray(galleryArray);
        break;
      case "Static":
        setCopyGalleryArray(filterStatic());
        break;
      case "Animated":
        setCopyGalleryArray(filterAnimated());
        break;
    }
  };

  return { changeBreeds, changeLimit, sortByOrder, sortByType };
};

export default useChange;
