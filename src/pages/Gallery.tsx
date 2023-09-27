import { useMemo, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
import DefaultState from "../Components/UI/DefaultState/DefaultState";
import GalleryBar from "../Components/GalleryBar/GalleryBar";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  displayArray$,
  galleryArray$,
  copyGalleryArray$,
  limit$,
  pageNumber$,
} from "../Recoil/atoms";
import GridForGallery from "../Components/UI/Grid/GridForGallery";
import { usePagination } from "../Hooks/usePagination";
import PageIndicatorBlock from "../Components/UI/Buttons/PrevNextButtons/PageIndicatorBlock";
import ModalWindow from "../Components/Modal/ModalWindow";

const Gallery = () => {
  const [copyGalleryArray, setCopyGalleryArray] =
    useRecoilState(copyGalleryArray$);
  const galleryArray = useRecoilValue(galleryArray$);
  const [limit, setLimit] = useRecoilState(limit$);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const displayArray = useRecoilValue(displayArray$);
  const { sliceArray, pageAmount } = usePagination(copyGalleryArray);

  useEffect(() => {
    setCopyGalleryArray(galleryArray)
    return () => {
      setLimit(5);
      setPageNumber(1);
    };
  }, []);

  useMemo(() => {
    sliceArray();
  }, [limit, pageNumber, copyGalleryArray]);

  return (
    <div>
      <NavBar />
      <Section>
        <Header class_name="title_button" title_content="GALLERY">
          <ModalWindow />
        </Header>
        <GalleryBar />
        {galleryArray.length === 0 ? (
          <DefaultState>The voting cats will be display here</DefaultState>
        ) : copyGalleryArray.length === 0 ? (
          <DefaultState>No item found</DefaultState>
        ) : (
          <>
            <GridForGallery pageAmount={pageAmount} array={displayArray} />
            <PageIndicatorBlock pageAmount={pageAmount} />
          </>
        )}
      </Section>
    </div>
  );
};
export default Gallery;
