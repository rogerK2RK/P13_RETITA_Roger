import React, {useEffect, useState, useRef } from 'react';
import styles from "./styles.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store.js'
import { getProfileData, putNewInfos}  from '../../components/Token';

const selectUser = (state) => state.user;
// const selectFullName = (state) => `${state.user.firstName} ${state.user.lastName}`

function User() {
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();
  const [showBlock, setShowBlock] = useState(false);
  const dispatch = useDispatch();
  
  const user = useSelector(selectUser)
  const userFirstNameRef = useRef();
  const userLastNameRef = useRef();
  async function fetchProfile() {
    const {email,firstName,lastName} = await getProfileData();
      dispatch(setUser({
        email,
        firstName,
        lastName,
    }));
  }
 
  useEffect(() => {
    
    fetchProfile().then(() =>  setIsLoading(false))
  },[]);

  function handleClickEdit(e){
    e.preventDefault();
    setShowBlock(!showBlock);
  }

  function handleCancelClick() {
    setShowBlock(false);
  }

  async function handleSavelClick(e){
    e.preventDefault();


    const userFirstNameVal = userFirstNameRef.current.value;
    const userLastNameVal = userLastNameRef.current.value;
    console.log("bonjour: " + userFirstNameVal+","+ userLastNameVal);
    await putNewInfos(userFirstNameVal, userLastNameVal);
    setShowBlock(false);
    getProfileData();
    fetchProfile();
  }
  // if(error) return <div>{error}</div>

  return ( isLoading ? <div>Loading...</div> :
    <main className={styles["bg-dark"]}>
      <div>
        {/* {JSON.stringify(user)} */}
        {/* {JSON.stringify(user.isLogged)} */}
      </div>
      <div className={styles["header"]}>
        <h1>Welcome back<br />
        {user.firstName} {user.lastName} !
        </h1>
        {!showBlock && (
        <button onClick={handleClickEdit} className={styles["edit-button"]}>Edit Name</button>
        )}
        {showBlock && (
        <div className={styles["bx-glb-change"]}>
          <div className={styles['box-change']}>
            <input ref={userFirstNameRef} type="text" placeholder="first name" id={styles["frstnm-input"]}/>
            <input ref={userLastNameRef} type="text" placeholder="last name" />
          </div>
        
          <div className={styles['box-change']}>
            <button onClick={handleSavelClick}  className={styles["change-button"]} id={styles["save-button"]}>Save</button>
            <button onClick={handleCancelClick}  className={styles["change-button"]} id={styles["cancel-button"]}>Cancel</button>
          </div>
        </div>
        )}
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