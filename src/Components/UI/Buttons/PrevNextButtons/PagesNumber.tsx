import { useRecoilValue } from "recoil";
import { pageNumber$, lightDark$ } from "../../../../Recoil/atoms";

type Props = { pageAmount: number };

const PagesNumber = (props: Props) => {
  const pageNumber = useRecoilValue(pageNumber$);
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={isLight ? "title page page_light" : "title page page_dark"}
    >{`${pageNumber} from ${props.pageAmount}`}</div>
  );
};

export default PagesNumber;
