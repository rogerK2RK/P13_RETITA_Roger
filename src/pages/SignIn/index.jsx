import React, {useRef,useState} from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { sayHello, getEmail } from '../../store.js'
import main from '../../components/Token';

function SignIn() {
  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.isLogged);
  // const userEmail = useSelector(state => state.userEmail);
  const [password, setPassword] = useState("");
  const userEmailRef = useRef();
  // const [token, setToken] = useState('');

  async function handleButtonClick(e) {
    e.preventDefault()
    const userEmailInputVal = userEmailRef.current.value;
    dispatch(sayHello());
    dispatch(getEmail(userEmailInputVal));

    // console.log(userEmailInputVal);
    // console.log(password);
    const token = await main(userEmailInputVal, password);
    console.log(token);
    
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
              <label htmlFor="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setPassword( e.target.value)}/>
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

// (e) => {
//   e.preventDefault()
//   const userNameInputVal = userNameRef.current.value;
//   dispatch(sayHello());
//   dispatch(getName(userNameInputVal));
//   console.log(password);
//   console.log(userName);
//   // console.log(token);
// }



