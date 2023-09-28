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
        backgroundPosition: "600px 20px",
      }}
    >
      <div className="d-flex">
        <div
          className={
            isLight ? "date light_background black" : "date white dark"
          }
        >
          {props.date}
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
