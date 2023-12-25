import { useRecoilValue } from "recoil";
import { lightDark$ } from "../Recoil/atoms";
import "./sectionStyle.css";

type SectionProps = {children: React.ReactNode};

const Section = (props: SectionProps) => {
  const isLight = useRecoilValue(lightDark$);

  return (
    <section className={isLight ? "light_background" : "dark_background"}>
      {props.children}
    </section>
  );
};

export default Section;
