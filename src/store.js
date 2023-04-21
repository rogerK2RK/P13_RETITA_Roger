// import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";
import { createStore } from "redux";
import { rooReducer } from "./reducer";


const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



export const store = createStore(rooReducer, reduxDevtools);
