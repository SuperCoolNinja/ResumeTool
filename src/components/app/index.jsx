import { Card } from "../card";
import { PersonalDetailsCard } from "../personal-details-card";
import { Educations } from "../educations";
import { DataProvider } from "../../contexts/dataContext"; // Adjust the import path accordingly
import { Experiences } from "../experiences";

export const App = () => {
  return (
    <DataProvider>
      <div className="container cards-space">
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
    </DataProvider>
  );
};
