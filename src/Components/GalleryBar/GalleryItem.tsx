import { PropsWithChildren } from "react";
import "./GalleryBarStyle.css";

type GalleryItemProps = PropsWithChildren<{
  title: string;
}>;

const GalleryItem = (props: GalleryItemProps) => {
  return (
    <div className="gallery_item">
      <p className="gallery_item__header">{props.title}</p>
      {props.children}
    </div>
  );
};

export default GalleryItem;
