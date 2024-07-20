import { createContext } from 'react';

export const DataContext = createContext({
  data: {
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
  },
  setData: () => {},
});
