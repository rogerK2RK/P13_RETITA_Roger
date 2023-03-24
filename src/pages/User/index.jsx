import React, {useEffect} from 'react';
import styles from "./styles.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store.js'
import { getProfileData}  from '../../components/Token';

const selectUser = (state) => state.user;
// const selectFullName = (state) => `${state.user.firstName} ${state.user.lastName}`

function User() {
  const dispatch = useDispatch();
  
  const user = useSelector(selectUser)


  useEffect(() => {
    async function fetchProfile() {
      const {email,firstName,lastName} = await getProfileData();
        dispatch(setUser({
          email,
          firstName,
          lastName,
          isLogged: true,
          remember: true,
      }));
    }
    fetchProfile()
  },[]);

  return (
    <main className={styles["bg-dark"]}>
      <div>
        {JSON.stringify(user)}
      </div>
      <div className={styles["header"]}>
        <h1>Welcome back<br />
        {user.firstName} {user.lastName} !
        </h1>
        <button className={styles["edit-button"]}>Edit Name</button>
        <div className={styles['box-change']}>
          <input type="text" placeholder="prénom" />
          <input type="text" placeholder="prénom" />
        </div>
      </div>
      <h2 className={styles["sr-only"]}>Accounts</h2>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Checking (x8349)</h3>
          <p className={styles["account-amount"]}>$2,082.79</p>
          <p className={styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Savings (x6712)</h3>
          <p className={styles["account-amount"]}>$10,928.42</p>
          <p className={styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles["account-amount"]}>$184.30</p>
          <p className={styles["account-amount-description"]}>Current Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User ;