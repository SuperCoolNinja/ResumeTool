import React, { useState } from 'react';
import { DataContext } from '../../contexts/dataContext';
import { PersonalDetailsCard } from '../personal-details';
import './style.css';

export const App = () => {
  const [data, setData] = useState({
    personnalDetails: {
      fullname: "",
      email: "",
      address: "",
      phone: "",
    },
    educations: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    experiences: [
      {
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
  });

  const dataObj = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={dataObj}>
      <PersonalDetailsCard />
    </DataContext.Provider>
  );
};
