import React from 'react';
import styles from "./styles.module.css"

function SignIn() {
  return (
    <main >
      <div class="main bg-dark">
        <section class={styles["sign-in-content"]}>
          <i class={styles["fa fa-user-circle sign-in-icon"]}></i>
          <h1>Sign In</h1>
          <form>
            <div class={styles["input-wrapper"]}>
              <label for="username">Username</label><input type="text" id="username" />
            </div>
            <div class={styles["input-wrapper"]}>
              <label for="password">Password</label><input type="password" id="password" />
            </div>
            <div class={styles["input-remember"]}>
              <input type="checkbox" id={styles["remember-me"]} /><label for="remember-me"
                >Remember me</label>
            </div>
            <a href="./user.html" class={styles["sign-in-button"]}>Sign In</a>
          </form>
        </section>
      </div>
      
    </main>
  );
}

export default SignIn ;





