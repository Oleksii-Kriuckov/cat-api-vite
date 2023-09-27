import { PropsWithChildren } from "react";
import "./styles.css";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../../Recoil/atoms";

type BlackTextProps = PropsWithChildren<{ children: string; }>;

export const BlackText = (p: BlackTextProps) => {
  const isLight = useRecoilValue(lightDark$);
  return <span className={isLight ? "black" : "white"}>{p.children}</span>;
};
