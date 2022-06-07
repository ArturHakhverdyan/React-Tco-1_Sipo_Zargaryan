import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/routes";
import { Header } from "./layout/Header";
import { store } from "./redux/store";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Header />
      <RoutesComponent />
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;


