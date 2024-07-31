import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("data", {
    personalDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      address: "30461 Lue Cliffs Suite 385",
      phone: "+1 (555) 123-4567",
    },
    educations: [
      {
        school: "University of Los angeles",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2011-07-06",
        endDate: "2015-06-05",
        location: "Berkeley, CA",
        id: "8b3a2fd4-25c6-4f2b-a4cf-1d529b485cf3",
      },
    ],
    experiences: [
      {
        companyName: "Tech Innovators Inc.",
        positionTitle: "Senior Fullstack Developer",
        startDate: "2023-01-02",
        endDate: "2024-07-31",
        location: "San Francisco, CA",
        description:
          "Designed and developed multiple high-performance and secure web applications using React and Node.js for front-end and back-end. Managed and optimized MySQL and MongoDB databases, improving query performance by 40%. Collaborated closely with product and UX/UI teams to define requirements and ensure on-time delivery. Implemented CI/CD pipelines with Jenkins and Docker, reducing deployment times by 50%.",
        id: "3ffca18a-2567-4001-a3cf-b4b249c31050",
      },
      {
        companyName: "Web Solutions LLC",
        positionTitle: "Fullstack Developer",
        startDate: "2017-06-13",
        endDate: "2020-12-08",
        location: "New York, NY",
        description:
          "Developed features for an e-commerce application using Angular for front-end and Express.js for back-end. Designed RESTful APIs to integrate third-party services, enhancing application functionality by 30%. Participated in code reviews and mentored junior developers, fostering a high-quality coding culture.",
        id: "8fa96524-c4d0-41e1-a52a-39c8b1f23a8a",
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
