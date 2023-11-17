import NextButton from "./NextButton";
import PagesNumber from "./PagesNumber";
import PrevButton from "./PrevButton";

type Props = { pageAmount: number };

const PageIndicatorBlock = (props: Props) => {
  return (
    <>
      <div className="d-none d-sm-flex gap-4 justify-content-center mt-5">
        <PrevButton class_disabled="prev_disabled" main_class="prev" />
        <PagesNumber pageAmount={props.pageAmount} />
        <NextButton
          pageAmount={props.pageAmount}
          class_disabled="next_disabled"
          main_class="next"
        />
      </div>

      <div className="d-flex flex-column d-sm-none gap-4 mt-5">
        <div className="s justify-content-between ">
          <PrevButton
            class_disabled="prev_disabled"
            main_class="prev"
          />
          <NextButton
            pageAmount={props.pageAmount}
            class_disabled="next_disabled"
            main_class="next"
          />
        </div>

        <div className="xs justify-content-between ">
          <PrevButton
            class_disabled="prev_disabled_mob"
            main_class="prev_mob"
          />
          <NextButton
            pageAmount={props.pageAmount}
            class_disabled="next_disabled_mob"
            main_class="next_mob"
          />
        </div>

        <PagesNumber pageAmount={props.pageAmount} />
      </div>
    </>
  );
};

export default PageIndicatorBlock;
