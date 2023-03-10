// import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";
import { createStore } from "redux";



// // on trouve les éléments dans le document HTML
// const toSignIn = document.getElementById("sign-in-button");


// toSignIn.addEventListener("click", () => {
//   // Ce code s'exécute lorsque le bouton "Sign In" est cliqué
//   // On envoie une action avec dispatch
//   store.dispatch(sayHello());
// });

// function updateCosole(isLogged){
//   if(isLogged === false) {
//     console.log("Vous êtes déconnecter !");
//   }
// }


//state
const initialState = {
    firstName: "",
    userName: "",
    lastName: "",
    email: "",
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
  type: "getPassword",
  payload: password
})


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
  }if(action.type === "getPassword"){
    return {
      ...state,
      password: action.payload,
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
