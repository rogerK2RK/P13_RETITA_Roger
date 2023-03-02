import React from 'react';
import styles from "./styles.module.css"

export default function erreur(){
    return (
        <main >
          <div className="main bg-dark">
            <section className={styles["sign-in-content"]}>
              <i className={styles["fa fa-user-circle sign-in-icon"]}></i>
              <h1>Erreur 404</h1>
            </section>
          </div>
        </main>
    );
}