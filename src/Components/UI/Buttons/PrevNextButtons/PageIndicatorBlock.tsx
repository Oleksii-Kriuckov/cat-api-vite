import NextButton from "./NextButton";
import PagesNumber from "./PagesNumber";
import PrevButton from "./PrevButton";

type Props = { pageAmount: number };

const PageIndicatorBlock = (props: Props) => {
  return (
    <div className="d-flex gap-4 justify-content-center mt-5">
      <PrevButton />
      <PagesNumber pageAmount={props.pageAmount} />
      <NextButton pageAmount={props.pageAmount} />
    </div>
  );
};

export default PageIndicatorBlock;
