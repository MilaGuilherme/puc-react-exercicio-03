import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { reducers } from './reducers';

import App from "./App";
import { createStore } from "redux";

const rootElement = document.getElementById("root");

const store = createStore(reducers);


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, rootElement);
