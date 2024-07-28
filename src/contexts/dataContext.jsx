import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("data", {
    personalDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      address: "30461 Lue Cliffs Suite 385",
      phone: "1-603-507-1027",
    },
    educations: [],
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

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
