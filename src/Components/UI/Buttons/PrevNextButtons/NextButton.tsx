import { useRecoilState, useRecoilValue } from "recoil";
import { lightDark$, pageNumber$ } from "../../../../Recoil/atoms";
import "./styles/PrevNextButtonsStyle.css";
import "../../../../AppStyle/adaptive.css"

type Props = { 
  pageAmount: number,
  main_class: string,
  class_disabled: string 
};

const NextButton = ({pageAmount, main_class, class_disabled}: Props) => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const isLight = useRecoilValue(lightDark$);

  const increasePage = () => {
    if (pageNumber < pageAmount) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div
      className={
        isLight
          ? pageNumber < pageAmount
            ? `page_button ${main_class} page_button_light`
            : `disabled ${class_disabled} disabled_light`
          : pageNumber < pageAmount
          ? `page_button ${main_class} page_button_dark`
          : `disabled ${class_disabled} disabled_dark`
      }
      onClick={increasePage}
    >
      NEXT
    </div>
  );
};

export default NextButton;
