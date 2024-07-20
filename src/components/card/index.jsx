import { DropDownLess } from "../dropdown-icons/less";
import { DropDownMore } from "../dropdown-icons/more";

export const Card = ({ title, renderInputs, viewMore, setViewMore }) => {
  const updateViewMore = (bool) => {
    setViewMore(bool);
  };

  return (
    <div className="container_card">
      <div className="wrapper_card">
        <h3 className="title_card">{title}</h3>
        {!viewMore ? (
          <DropDownMore updateViewMore={updateViewMore} />
        ) : (
          <DropDownLess updateViewMore={updateViewMore} />
        )}
      </div>
      {viewMore && renderInputs()}
    </div>
  );
};
