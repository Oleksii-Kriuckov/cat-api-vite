import BlockActionInfo from "../Components/BlockActionInfo/BlockActionInfo";
import { isObjectForArray } from "../Types/isObject";

type Props = {removeArray: {}[]};

export const RemoveActionsBlock = (props: Props) => {
  return (
    <div>
      {props.removeArray.map((block) => {
        if (isObjectForArray(block)) {
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
        }
      })}
    </div>
  );
};
