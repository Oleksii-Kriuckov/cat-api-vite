import { useRecoilState, useRecoilValue } from "recoil";
import { lightDark$, pageNumber$ } from "../../../../Recoil/atoms";
import "./styles/PrevNextButtonsStyle.css";

type Props = { 
  main_class: string,
  class_disabled: string
 };

const PrevButton = ({main_class, class_disabled}: Props) => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const isLight = useRecoilValue(lightDark$);

  const decreasePage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div
      className={
        isLight
          ? pageNumber > 1
            ? `page_button ${main_class} page_button_light`
            : `disabled ${class_disabled} disabled_light`
          : pageNumber > 1
          ? `page_button ${main_class} page_button_dark`
          : `disabled ${class_disabled} disabled_dark`
      }
      onClick={decreasePage}
    >
      PREV
    </div>
  );
};

export default PrevButton;
