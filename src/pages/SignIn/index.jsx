import React, {useRef, useState} from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getIsLogged, rememberMe } from '../../actions.js'
import {getToken}  from '../../components/Token';
import { useNavigate } from "react-router-dom";
import { isLogged } from '../../selectors';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector(isLogged);
  const [isChecked, setIsChecked] = useState(false);

  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  // const useCheckboxRef = useRef(null)

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  async function handleButtonClick(e) {

    e.preventDefault();

    const userEmailInputVal = userEmailRef.current.value;
    const userPasswordInputVal = userPasswordRef.current.value;

    // Vérifiez si les champs d'entrée ne sont pas vides
    if (!userEmailInputVal) {
      document.querySelector('#username-error').textContent = 'Veuillez entrer une adresse e-mail.';
    }
    if (!userPasswordInputVal) {
      document.querySelector('#password-error').textContent = 'Veuillez entrer un mot de passe.';
    }

    // Vérifiez si l'adresse e-mail est valide
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmailInputVal)) {
      document.querySelector('#username-error').textContent = 'Veuillez entrer une adresse e-mail valide.';
    }


    console.log(`Checkbox is checked: ${isChecked}`);

    dispatch(getEmail(userEmailInputVal));
    dispatch(rememberMe(isChecked));

    const statu = await getToken(userEmailInputVal, userPasswordInputVal);



    if (statu){
      dispatch(getIsLogged(true));
      navigate("/user");
    }else {
      console.log("j'affiche les messages d'erreur")
      document.querySelector('#password-error').textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
    
  };
  
  return (
    <main >
      <div className="main bg-dark">
        <section className={styles["sign-in-content"]}>
          <i className={styles["fa fa-user-circle sign-in-icon"]}></i>
          <h1>Sign In </h1>
          <form>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="username">Username</label>
              <input ref={userEmailRef} type="text" id="username" />
              <span id="username-error" className={styles['errorMessage']}></span>
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="password">Password</label>
              <input ref={userPasswordRef} type="password" id="password" />
              <span id="password-error" className={styles['errorMessage']}></span>
            </div>
            <div className={styles["input-remember"]}>
              <input type="checkbox" id={styles["remember-me"]} 
                checked={isChecked}
                onChange={handleCheckboxChange} 
               /><label htmlFor="remember-me"
                >Remember me</label>
            </div>
            <button onClick={handleButtonClick} className={styles["sign-in-button"]} id="sign-in-button">Sign In</button>
            <p>{isConnected === true ? "User Connecter" : "User Deconnecter"}</p>
          </form>
        </section>
      </div>
      
    </main>
  );
}

export default SignIn ;