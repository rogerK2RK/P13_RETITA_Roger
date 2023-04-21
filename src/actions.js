export const ACTION_GET_PASSWORD = "getPassword";
export const SET_USER = "SET_USER";
export const SET_LOGED = "getIsLogged"

// Les actions creators

export const rememberMe = (remember) => ({
    type: "rememberMe",
    payload: remember
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