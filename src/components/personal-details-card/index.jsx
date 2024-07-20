import { DropDownMore } from "../dropdown-icons/more";
import { DropDownLess } from "../dropdown-icons/less";
import { useState } from "react";
import { Inputs } from "./inputs";

export const PersonalDetailsCard = () => {
  const [viewMore, setViewMore] = useState(true);

  const updateViewMore = (bool) => {
    setViewMore(bool);
  };

  return (
    <div className="container_card">
      <div className="wrapper_card">
        <h3 className="title_card">Personal Details</h3>
        {!viewMore ? (
          <DropDownMore updateViewMore={updateViewMore} />
        ) : (
          <DropDownLess updateViewMore={updateViewMore} />
        )}
      </div>

      {viewMore && <Inputs />}
    </div>
  );
};
