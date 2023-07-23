import "./App.css";
// import IceCreamContainer from "./components/IceCreamContainer";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
// import PizzaContainer from "./components/pizzaContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import NewIceCreamContainer from "./components/NewIceCreamContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    // store connected to all components in a project
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <PizzaContainer />
        <NewCakeContainer />
        <NewIceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
