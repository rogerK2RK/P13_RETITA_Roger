import React, {useRef} from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { sayHello, getEmail } from '../../store.js'
import {getToken}  from '../../components/Token';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector(state => state.isLogged);
  // let email = useSelector(state => state.email);
  // let firstName = useSelector(state => state.firstName);
  // let lastName = useSelector(state => state.lastName);
  // let password = useSelector(state => state.password);
  // let remember = useSelector(state => state.remember);

  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  async function handleButtonClick(e) {

    e.preventDefault()

    const userEmailInputVal = userEmailRef.current.value;
    const userPasswordInputVal = userPasswordRef.current.value;

    dispatch(sayHello());
    dispatch(getEmail(userEmailInputVal));

    const statu = await getToken(userEmailInputVal, userPasswordInputVal);


    if (statu){
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
              <input type="checkbox" id={styles["remember-me"]} /><label htmlFor="remember-me"
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



