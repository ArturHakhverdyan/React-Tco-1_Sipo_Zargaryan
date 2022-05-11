import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  return (
    <div className="project-layout">
      <FilterSection />
      <MainSection />
    </div>
  );
};
