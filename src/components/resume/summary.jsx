import { isTheSamePeriod } from "../../services/isTheSamePeriod";

export const Summary = ({ startDate, endDate, location }) => {
  return (
    <div className="wrapper-resume-item">
      <p>{isTheSamePeriod(startDate, endDate)}</p>
      <p>{location}</p>
    </div>
  );
};
