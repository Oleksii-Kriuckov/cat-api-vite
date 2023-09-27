import useAddVote from "../../../../Hooks/useAddAction";
import "./VoteButtonsStyle.css";

type LikeButtonProps = {
  message: string;
  icon: string;
  alt: string;
};

const VoteButton = ({ message, icon, alt }: LikeButtonProps) => {
  const { addAction } = useAddVote();

  return (
    <div
      className="vote_button"
      onClick={() => addAction(message, icon, alt)}
    ></div>
  );
};

export default VoteButton;
