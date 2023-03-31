import React, {useRef, useState} from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getIsLogged, rememberMe } from '../../store.js'
import {getToken}  from '../../components/Token';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector(state => state.isLogged);
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
    // const isChecked = useCheckboxRef.current.value; 

    console.log(`Checkbox is checked: ${isChecked}`);

    dispatch(getEmail(userEmailInputVal));
    dispatch(rememberMe(isChecked));

    const statu = await getToken(userEmailInputVal, userPasswordInputVal);



    if (statu){
      dispatch(getIsLogged(true));
      navigate("/user");
    }else {
      
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
              <label htmlFor="username">Username</label><input ref={userEmailRef} type="text" id="username" />
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="password">Password</label><input ref={userPasswordRef} type="password" id="password" 
              // value={password} onChange={(e) => setPassword( e.target.value)}
              />
            </div>
            <div className={styles["input-remember"]}>
              <input type="checkbox" id={styles["remember-me"]} 
                // ref={useCheckboxRef}
                checked={isChecked}
                onChange={handleCheckboxChange} 
               /><label htmlFor="remember-me"
                >Remember me</label>
            </div>
            {/* <a href="./user.html" className={styles["sign-in-button"]}>Sign In</a> */}
            <button onClick={handleButtonClick} className={styles["sign-in-button"]} id="sign-in-button">Sign In</button>
            <p>{isConnected === true ? "User Connecter" : "User Deconnecter"}</p>
          </form>
        </section>
      </div>
      
    </main>
  );
}

export default SignIn ;



