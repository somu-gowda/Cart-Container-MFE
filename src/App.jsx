import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";

// css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Products from "./components/Products";
import NavBar from "./components/NavBar";

// MFE
import Graph from "graph/src/components/Graph";

const App = () => {
  let [state, setState] = useState([]);

  const getCartItem = (data) => {
    setState(data);
  };

  return (
    <Fragment>
      <Provider store={Store}>
        <NavBar />
        <Products getCartItem={getCartItem} />
        <Graph cartItems={state} />
      </Provider>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
