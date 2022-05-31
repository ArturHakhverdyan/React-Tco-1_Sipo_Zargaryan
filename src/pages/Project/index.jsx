import { Project } from "../../components/Project";
import { TaskContextProvider } from "../../context/providers/taskContext";

export const ProjectPage = () => {
  return (
    <TaskContextProvider>
      <Project />;
    </TaskContextProvider>

  )};
