import BlockActionInfo from "../Components/BlockActionInfo/BlockActionInfo";
import { NewAct } from "../Types/types";

type Props = {removeArray: NewAct[]};

export const RemoveActionsBlock = (props: Props) => {
  return (
    <div style={{marginTop: 20}}>
      {props.removeArray.map((block) => {
          return (
            <BlockActionInfo
              key={block.id}
              date={block.date}
              icon={block.icon}
              message={block.message}
            >
              {block.id}
            </BlockActionInfo>
          );
      })}
    </div>
  );
};
