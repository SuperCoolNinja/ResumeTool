import { TitleSection } from "../../resume/title-sections";

export const Section = ({ label, children }) => {
  return (
    <section className="wrapper-sectionCV">
      <TitleSection label={label} />
      {children}
    </section>
  );
};
