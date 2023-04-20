import React, {useEffect, useState, useRef } from 'react';
import styles from "./styles.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store.js'
import { getProfileData, putNewInfos}  from '../../components/Token';
import { selectUser } from "../../selectors.js";

function User() {
  const [isLoading, setIsLoading] = useState(true);
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
 
  // useEffect(() => {
  //   fetchProfile().then(() =>  setIsLoading(false))
  // },[]);

  useEffect(() => {
    fetchProfile()
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  });

  function handleClickEdit(e){
    e.preventDefault();
    setShowBlock(!showBlock);
  }

  function handleCancelClick(e) {
    e.preventDefault();
    setShowBlock(false);
  }

  async function handleSavelClick(e){
    e.preventDefault();

    var userFirstNameVal = userFirstNameRef.current.value;
    var userLastNameVal = userLastNameRef.current.value;

    if ( userLastNameVal === "" && userFirstNameVal === "" ) {
      userLastNameVal = user.user.lastName;
      userFirstNameVal = user.user.firstName;
      await putNewInfos(userFirstNameVal, userLastNameVal);
    } else if ( userFirstNameVal === "" ) {
      userFirstNameVal = user.user.firstName;
      await putNewInfos(userFirstNameVal, userLastNameVal);
    } else if ( userLastNameVal === "" ) {
      userLastNameVal = user.user.lastName;
      await putNewInfos(userFirstNameVal, userLastNameVal);
    } else {
      await putNewInfos(userFirstNameVal, userLastNameVal);
    }
    setShowBlock(false);
    fetchProfile();
  }

  // console.log("bonjour: " + user.user.firstName+","+ user.user.lastName);

  return ( isLoading ? <div>Loading...</div> :
    <main className={styles["bg-dark"]}>
      <div>
      </div>
      <div className={styles["header"]}>
        <h1>Welcome back<br />
        {/* {user.user.firstName} {user.user.lastName} ! */}
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