import "./App.css";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import PizzaContainer from "./components/pizzaContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    // store connected to all components in a project
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <PizzaContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
