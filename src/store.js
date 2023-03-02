import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";
// import { createStore } from "react-redux";



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

export const getName = () => ({
  type: "getName"
})

const name = document.getElementById("username");

//reducer

function reducer(state = initialState, action) {
  if (action.type === "sayHello"){
    return {
      ...state,
      isLogged: !state.isLogged,
    }
  }if(action.type === "getName"){
    return {
      ...state,
      userName: name,
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
