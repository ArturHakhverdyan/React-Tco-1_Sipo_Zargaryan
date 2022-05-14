import { BACKEND_URL } from "./consts";
import { Header } from "./layout/Header";
import { ProjectPage } from "./pages/Project";

function App() {
  console.log(BACKEND_URL)
  return (
    <div className="App">
      <Header />
      <ProjectPage />
    </div>
  );
}

export default App;


