import { createContext } from "react";

export const DataContext = createContext({
  data: {
    personnalDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      address: "30461 Lue Cliffs Suite 385",
      phone: "1-603-507-1027",
    },
    educations: [
      { school: "", degree: "", startDate: "", endDate: "", location: "" },
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
