// import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";
import { createStore } from "redux";



const ACTION_GET_PASSWORD = "getPassword";
const SET_USER = "SET_USER";
const SET_LOGED = "getIsLogged"

//state
export const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isLogged: false,
    remember: false,
}

// Les actions creators
export const sayHello = () => ({
  type: "sayHello"
});

export const getEmail = (email) => ({
  type: "getEmail",
  payload: email
})

export const getPassword = (password) => ({
  type: ACTION_GET_PASSWORD,
  payload: password
})

// action creator
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const getIsLogged = (isLogged) => ({
  type: SET_LOGED,
  payload: isLogged,
});


//reducer
function reducer(state = initialState, action) {

  if (action.type === "sayHello"){
    return {
      ...state,
      isLogged: !state.isLogged,
    }
  }if(action.type === "getEmail"){
    return {
      ...state,
      email: action.payload,
    }
  }if(action.type === ACTION_GET_PASSWORD){
    return {
      ...state,
      password: action.payload,
    }
  }
  
  if(action.type === SET_USER){
    return {
      ...state,
      user: {...action.payload}
    }
  }

  if(action.type === SET_LOGED){
    return {
      ...state,
      isLogged:  action.payload,
    }
  }

  return state;
}

export const store = createStore(reducer, initialState);

//pour savoir dès que le state change
// store.subscribe(() => {
//   const state = store.getState();
//   updateCosole(state.isLogged);
// })
