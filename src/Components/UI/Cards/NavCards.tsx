import React from "react";
import Card from "./Card";
import { CardData } from "./CardData";

const NavCards = () => {
  return (
    <div className="nav_card d-flex flex-column flex-sm-row justify-content-between">
      {CardData.map(({ src, bgColor, buttonName, link }) => (
        <Card key={buttonName} src={src} bgColor={bgColor} link={link}>
          {buttonName}
        </Card>
      ))}
    </div>
  );
};
export default NavCards;
