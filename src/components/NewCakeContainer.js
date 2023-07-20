import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
// import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCakes(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  //used for providing part of the state data from store to the components
  //Reducer provide initial or updated state to store,when state in the store updates mapStateToProps gets called and it returns updated state value,which is accessed here state.cake.numOfCakes cause in rootReducer cake is the key and cakeReducer is the value
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  //used for dispatching action to store
  return {
    buyCakes: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer); //connect is used to connect store to the component,(connect takes two arguments mapStateToProps, mapDispatchToProps)
