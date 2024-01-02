import iconLike from "../../../Graphic/Icons/like-30.png";
import iconDislike from "../../../Graphic/Icons/dislike-30.png";
import iconFav from "../../../Graphic/Icons/fav-30.png";
import iconLikeActive from "../../../Graphic/Icons/white-icon/like-white-30.png";
import iconDislikeActive from "../../../Graphic/Icons/white-icon/dislike-white-30.png";
import iconFavActive from "../../../Graphic/Icons/white-icon/fav-white-30.png";
import {
  DISLIKES_ROUTE,
  FAVORITES_ROUTE,
  LIKES_ROUTE,
} from "../../../../Router/path";

interface LinkButtons {
  src: string;
  srcActive: string;
  alt: string;
  link: string;
}

export const linkButtonArray: LinkButtons[] = [
  { src: iconLike, srcActive: iconLikeActive, alt: "like", link: LIKES_ROUTE },
  {
    src: iconFav,
    srcActive: iconFavActive,
    alt: "favorite",
    link: FAVORITES_ROUTE,
  },
  {
    src: iconDislike,
    srcActive: iconDislikeActive,
    alt: "dislike",
    link: DISLIKES_ROUTE,
  },
];
export type KindButtons = "like_button" | "fav_button" | "dislike_button";
