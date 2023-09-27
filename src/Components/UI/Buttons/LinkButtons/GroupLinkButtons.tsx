import { linkButtonArray } from "./LinkButtonData";
import LinkButton from "./LinkButton";

// Button to Likes, Favorites, Dislikes
const GroupLinkButtons = () => {
  return (
    <div className="d-flex" style={{ gap: 10 }}>
      {linkButtonArray.map((elem) => (
        <LinkButton
          key={elem.alt}
          src={elem.src}
          srcActive={elem.srcActive}
          alt={elem.alt}
          link={elem.link}
        />
      ))}
    </div>
  );
};

export default GroupLinkButtons;
