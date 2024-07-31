import { PersonalDetailsCard } from "../personal-details-card";
import { Educations } from "../educations";
import { DataProvider } from "../../contexts/dataContext";
import { Experiences } from "../experiences";
import { Card } from "../shared/card";
import { Resume } from "../resume";
import { Button } from "../shared/button";

export const App = () => {
  const handleExportPDF = () => {
    window.print();
  };

  return (
    <DataProvider>
      <div className="container app_wrapper">
        {/* Left side, cards options */}
        <div className="cards-wrapper">
          <Card title="Save to PDF">
            <Button
              label={"Save"}
              handle={handleExportPDF}
              style={"btn-save"}
            />
          </Card>

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
