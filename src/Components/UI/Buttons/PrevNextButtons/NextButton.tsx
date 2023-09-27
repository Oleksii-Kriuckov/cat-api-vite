import { useRecoilState, useRecoilValue } from "recoil";
import "./PrevNextButtonsStyle.css";
import { lightDark$, pageNumber$ } from "../../../../Recoil/atoms";

type Props = { pageAmount: number };

const NextButton = (props: Props) => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);
  const isLight = useRecoilValue(lightDark$);

  const increasePage = () => {
    if (pageNumber < props.pageAmount) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div
      className={
        isLight
          ? pageNumber < props.pageAmount
            ? "prev_next_button prev_next_button_light next"
            : "disabled next_disabled disabled_light"
          : pageNumber < props.pageAmount
          ? "prev_next_button next prev_next_button_dark"
          : "disabled next_disabled disabled_dark"
      }
      onClick={increasePage}
    >
      NEXT
    </div>
  );
};

export default NextButton;
