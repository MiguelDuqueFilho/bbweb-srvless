import React from "react";
import ReactDOM from "react-dom";
import "./customStyle.css";
import "./global.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import AuthOrApp from "./main/AuthOrApp";
import reducers from "./main/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthOrApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
