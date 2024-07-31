import { PersonalDetailsCard } from "../personal-details-card";
import { Educations } from "../educations";
import { DataProvider } from "../../contexts/dataContext"; // Adjust the import path accordingly
import { Experiences } from "../experiences";
import { Card } from "../shared/card";
import { Resume } from "../resume";

export const App = () => {
  return (
    <DataProvider>
      <div className="container app_wrapper">
        {/* Left side, cards options */}
        <div className="cards-wrapper">
          <Card title="Personal Details">
            <PersonalDetailsCard />
          </Card>

          <Card title="Employment History">
            <Experiences />
          </Card>

          <Card title="Educations">
            <Educations />
          </Card>
        </div>

        {/* Right side, cv */}
        <div className="cv_container">
          <Resume />
        </div>
      </div>
    </DataProvider>
  );
};
