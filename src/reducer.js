import { getEmail, ACTION_GET_PASSWORD, SET_USER, SET_LOGED, rememberMe  } from "./actions";
import { combineReducers } from "redux";

//state
export const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isLogged: false,
    remember: false,
}

//reducer
function userReducer(state = initialState, action) {

    if(action.type === getEmail){
      return {
        ...state,
        email: action.payload,
      }
    }else if(action.type === ACTION_GET_PASSWORD){
      return {
        ...state,
        password: action.payload,
      }
    }else if (action.type === rememberMe){
      return {
        ...state,
        remember: state.remember,
      }
    }else if(action.type === SET_USER){
      return {
        ...state,
         ...action.payload
      }
    }else if(action.type === SET_LOGED){
      return {
        ...state,
        isLogged:  action.payload,
      }
    }
  
    return state;
}
  
export const rooReducer = combineReducers({user: userReducer})//pour combiner les deux objet