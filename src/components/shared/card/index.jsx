import { useState } from "react";
import { DropDownLess } from "../icons/dropdown-icons/less";
import { DropDownMore } from "../icons/dropdown-icons/more";

export const Card = ({ title, children }) => {
  const [isViewMore, setViewMore] = useState(true);

  const handleToggle = () => {
    setViewMore(!isViewMore);
  };

  return (
    <div className="container_card">
      <div className="wrapper_card">
        <h3 className="title_card">{title}</h3>
        <div onClick={handleToggle}>
          {isViewMore ? <DropDownLess /> : <DropDownMore />}
        </div>
      </div>
      {isViewMore && children}
    </div>
  );
};
