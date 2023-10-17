import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type Props = {class_name: string, onClick: () => void}

export const SquareButton = ({class_name, onClick}: Props) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <button className={
        isLight
          ? `${class_name} light_background`
          : `${class_name} dark_pink_background`
      } onClick={onClick} >

    </button>
  )
}

