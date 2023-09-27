import "./sectionStyle.css";
import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";

type SectionProps = PropsWithChildren<React.ReactNode>;

const Section = (props: SectionProps) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <section className={isLight ? "light_background" : "dark_background"}>
      {props.children}
    </section>
  );
};

export default Section;
