import React from 'react';
import styles from "./styles.module.css"

function SignIn() {
  return (
    <main >
      <div className="main bg-dark">
        <section className={styles["sign-in-content"]}>
          <i className={styles["fa fa-user-circle sign-in-icon"]}></i>
          <h1>Sign In</h1>
          <form>
            <div className={styles["input-wrapper"]}>
              <label for="username">Username</label><input type="text" id="username" />
            </div>
            <div className={styles["input-wrapper"]}>
              <label for="password">Password</label><input type="password" id="password" />
            </div>
            <div className={styles["input-remember"]}>
              <input type="checkbox" id={styles["remember-me"]} /><label for="remember-me"
                >Remember me</label>
            </div>
            {/* <a href="./user.html" className={styles["sign-in-button"]}>Sign In</a> */}
            <button className={styles["sign-in-button"]} id="sign-in-button">Sign In</button>
          </form>
        </section>
      </div>
      
    </main>
  );
}

export default SignIn ;





