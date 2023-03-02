import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";



// on trouve les éléments dans le document HTML
const toSignIn = document.getElementById("sign-in-button");


toSignIn.addEventListener("click", () => {
  // Ce code s'exécute lorsque le bouton "Sign In" est cliqué
  // On envoie une action avec dispatch
  store.dispatch(sayHello());
});

function updateCosole(isLogged){
  if(isLogged === false) {
    console.log("Vous êtes déconnecter !");
  }
}


//state
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLogged: false,
    remember: false,
}

// Les actions creators
const sayHello = () => ({
  type: "sayHello"
});


//reducer

function reducer(state, action) {
  if (action.type === "sayHello"){
    return {
      ...state,
      isLogged: !state.isLogged,
    }
  }
  return state;
}

const store = createStore(reducer, initialState);

//pour savoir dès que le state change
store.subscribe(() => {
  const state = store.getState();
  updateCosole(state.isLogged);
})
