import { PersonalDetailsCard } from "../personal-details-card";
import { Educations } from "../educations";
import { DataProvider } from "../../contexts/dataContext"; // Adjust the import path accordingly
import { Experiences } from "../experiences";
import { Card } from "../shared/card";
import { Cv } from "../cv";

export const App = () => {
  return (
    <DataProvider>
      <div className="container app_wrapper">
        {/* Left side, cards options */}
        <div className="cards-wrapper">
          <Card title="Personal Details">
            <PersonalDetailsCard />
          </Card>

          <Card title="Educations">
            <Educations />
          </Card>

          <Card title="Experiences">
            <Experiences />
          </Card>
        </div>

        {/* Right side, cv */}
        <div className="cv_container">
          <Cv />
        </div>
      </div>
    </DataProvider>
  );
};
