import { useRecoilState, useRecoilValue } from "recoil";
import "./PrevNextButtonsStyle.css";
import { lightDark$, pageNumber$ } from "../../../../Recoil/atoms";

const PrevButton = () => {
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
            ? " prev_next_button_light prev prev_next_button"
            : "disabled prev_disabled disabled_light"
          : pageNumber > 1
          ? "prev_next_button prev prev_next_button_dark"
          : "disabled prev_disabled disabled_dark"
      }
      onClick={decreasePage}
    >
      PREV
    </div>
  );
};

export default PrevButton;
