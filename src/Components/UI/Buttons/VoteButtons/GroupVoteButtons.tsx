import VoteButton from "./VoteButton";
import LikeIcon from "../../../Graphic/Icons/like-color-20.png";
import FavIcon from "../../../Graphic/Icons/fav-20.png";
import DislikeIcon from "../../../Graphic/Icons/dislike-color-20.png";
import { LikeMessage, FavMessage, DislikeMessage } from "../../../../assets/DataForVote";
import { linkButtonArray } from "../LinkButtons/LinkButtonData";

//Buttons for voting Like, Favorite, Dislike
const GroupVoteButtons = () => {
  return (
    <div className="groupButtons" style={{ marginTop: -40 }}>
      <VoteButton
        message={LikeMessage}
        icon={LikeIcon}
        alt={linkButtonArray[0].alt}
      />
      <VoteButton
        message={FavMessage}
        icon={FavIcon}
        alt={linkButtonArray[1].alt}
      />
      <VoteButton
        message={DislikeMessage}
        icon={DislikeIcon}
        alt={linkButtonArray[2].alt}
      />
    </div>
  );
};

export default GroupVoteButtons;
