import "./sortButtonStyle.css";

type SortButtonProps = { class_name: string; sortFunction: () => void };

const SortButton1 = (props: SortButtonProps) => {
  return (
    <button className={props.class_name} onClick={props.sortFunction}></button>
  );
};

export default SortButton1;
