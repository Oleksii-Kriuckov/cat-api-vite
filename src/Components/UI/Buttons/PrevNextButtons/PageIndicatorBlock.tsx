import { useRecoilState } from "recoil";
import PagesNumber from "./PagesNumber";
import { pageNumber$ } from "../../../../Recoil/atoms";
import PageButton from "./PageButton";
import "./styles/PageButtonsStyle.css";

type Props = { pageAmount: number };

const PageIndicatorBlock = ({ pageAmount }: Props) => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumber$);

  return (
    <>
      <div className="d-none d-sm-flex gap-4 justify-content-center mt-5">
        <PageButton
          class_disabled="prev_disabled"
          main_class="prev"
          condition={pageNumber > 1}
          onClick={() => {
            pageNumber > 1 && setPageNumber(pageNumber - 1);
          }}
        >
          prev
        </PageButton>
        <PagesNumber pageAmount={pageAmount} />
        <PageButton
          class_disabled="next_disabled"
          main_class="next"
          condition={pageNumber < pageAmount}
          onClick={() => {
            pageNumber < pageAmount && setPageNumber(pageNumber + 1);
          }}
        >
          next
        </PageButton>
      </div>

      <div className="d-flex flex-column d-sm-none gap-4 mt-5">
        <div className="s justify-content-between ">
          <PageButton
            class_disabled="prev_disabled"
            main_class="prev"
            condition={pageNumber > 1}
            onClick={() => {
              pageNumber > 1 && setPageNumber(pageNumber - 1);
            }}
          >
            prev
          </PageButton>

          <PageButton
            class_disabled="next_disabled"
            main_class="next"
            condition={pageNumber < pageAmount}
            onClick={() => {
              pageNumber < pageAmount && setPageNumber(pageNumber + 1);
            }}
          >
            next
          </PageButton>
        </div>

        <div className="xs justify-content-between ">
          <PageButton
            class_disabled="prev_disabled_mob"
            main_class="prev_mob"
            condition={pageNumber > 1}
            onClick={() => {
              pageNumber > 1 && setPageNumber(pageNumber - 1);
            }}
          >
            prev
          </PageButton>

          <PageButton
            class_disabled="next_disabled_mob"
            main_class="next_mob"
            condition={pageNumber < pageAmount}
            onClick={() => {
              pageNumber < pageAmount && setPageNumber(pageNumber + 1);
            }}
          >
            next
          </PageButton>
        </div>

        <PagesNumber pageAmount={pageAmount} />
      </div>
    </>
  );
};

export default PageIndicatorBlock;
