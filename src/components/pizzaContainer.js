import React from "react";
import { buyPizza } from "../redux/pizza/pizzaAction";
import { connect } from "react-redux";

function pizzaContainer(props) {
  return (
    <div>
      <div>Number of pizzas-{props.numOfPizzas}</div>
      <button onClick={props.buyPizza}>Buy Pizza</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfPizzas: state.pizza.numOfPizzas, //why?
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("inside dispatch function");
  return {
    buyPizza: () => dispatch(buyPizza()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(pizzaContainer);
