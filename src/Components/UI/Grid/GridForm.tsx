import RemoveButton from "../Buttons/RemoveButton";
import { countRows } from "../../../functions/countRows";
import { NewAct } from "../../../Types/types";
import "./GridStyle.css";

type GridFormProps = {
  array: NewAct[];
  class_name_btn: string;
  alt: string;
  removeMessage: string;
};

const GridForm = (props: GridFormProps) => {

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${countRows(props.array.length)}, 140px)`,
        marginBottom: 40,
      }}
    >
      {props.array.map((elem, ind) =>
          <div
            className="grid_item grid_form"
            key={ind}
            style={{ backgroundImage: `url(${elem.image.url})` }}
          >
            <div className="background_grid_item"></div>
            <RemoveButton
              alt={props.alt}
              class_name={props.class_name_btn}
              id={elem.id}
              message={props.removeMessage}
            />
          </div>
      )}
    </div>
  );
};
export default GridForm;
