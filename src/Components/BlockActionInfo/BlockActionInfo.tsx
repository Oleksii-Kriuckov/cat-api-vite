import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import "./BlockActionInfo.css";

type BlockActionInfoProps = PropsWithChildren<{
  date: string;
  message: string;
  icon: string;
}>;

const BlockActionInfo = (props: BlockActionInfoProps) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <div
      className={isLight ? "block light" : "block dark_background01"}
      style={{
        backgroundImage: `url(${props.icon})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex flex-column flex-sm-row">
        <div
          className={
            isLight ? "date light_background black" : "date white dark"
          }
        >
          {props.date.slice(0, 5)}
        </div>
        <div className="message">
          Image ID:{" "}
          <span className={isLight ? "id black" : "id white"}>
            {props.children}
          </span>{" "}
          was {props.message}
        </div>
      </div>
    </div>
  );
};

export default BlockActionInfo;
