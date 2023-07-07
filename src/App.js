import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    // store connected to all components in a project
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
