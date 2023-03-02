import React from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { sayHello, getName } from '../../store.js'

function SignIn() {
  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.isLogged);
  return (
    <main >
      <div className="main bg-dark">
        <section className={styles["sign-in-content"]}>
          <i className={styles["fa fa-user-circle sign-in-icon"]}></i>
          <h1>Sign In</h1>
          <form>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="username">Username</label><input type="text" id="username" />
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="password">Password</label><input type="password" id="password" />
            </div>
            <div className={styles["input-remember"]}>
              <input type="checkbox" id={styles["remember-me"]} /><label htmlFor="remember-me"
                >Remember me</label>
            </div>
            {/* <a href="./user.html" className={styles["sign-in-button"]}>Sign In</a> */}
            <button onClick={() => {
              dispatch(sayHello());
              dispatch(getName());

            }} className={styles["sign-in-button"]} id="sign-in-button">Sign In</button>
            <p>{isConnected === true ? "User Connecter" : "User Deconnecter"}</p>
          </form>
        </section>
      </div>
      
    </main>
  );
}

export default SignIn ;





