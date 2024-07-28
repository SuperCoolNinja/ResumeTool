import React from "react";
import { Card } from "../card";
import { PersonalDetailsCard } from "../personal-details-card";
import { Educations } from "../educations";
import { DataProvider } from "../../contexts/dataContext"; // Adjust the import path accordingly

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
      </div>
    </DataProvider>
  );
};
