import Dislikes from "../pages/Dislikes";
import Favorites from "../pages/Favorites";
import Likes from "../pages/Likes";
import Search from "../pages/Search";
import Breeds from "../pages/Breeds";
import Gallery from "../pages/Gallery";
import Initial from "../pages/Initial";
import Voting from "../pages/Voting";
import Breedinfo from "../pages/BreedInfo";
import {
  BREEDS_ROUTE,
  DISLIKES_ROUTE,
  FAVORITES_ROUTE,
  GALLERY_ROUTE,
  INITIAL_ROUTE,
  LIKES_ROUTE,
  SEARCH_ROUTE,
  VOTING_ROUTE,
} from "./path";

export const AppRoutes = [
  { path: INITIAL_ROUTE, element: <Initial /> },
  { path: BREEDS_ROUTE, element: <Breeds /> },
  { path: GALLERY_ROUTE, element: <Gallery /> },
  { path: VOTING_ROUTE, element: <Voting /> },
  { path: LIKES_ROUTE, element: <Likes /> },
  { path: FAVORITES_ROUTE, element: <Favorites /> },
  { path: DISLIKES_ROUTE, element: <Dislikes /> },
  { path: SEARCH_ROUTE, element: <Search /> },
  { path: "/breeds/:id", element: <Breedinfo /> },
  // {path: , element: },
];
