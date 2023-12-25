import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";
import RemoveButton from "../Buttons/RemoveButton";

type Props = {
  key: string | number;
  imageUrl: string;
  alt: string;
  id: string
};

const GridBackground = (props: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className="grid_item grid_form"
      key={props.key}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="background_grid_item"></div>
      <RemoveButton
        alt={props.alt}
        class_name={
          isLight ? "dislike_button light_background" : "dislike_button dark"
        }
        id={props.id}
        message="removed from Dislikes"
      />
    </div>
  );
};

export default GridBackground;
