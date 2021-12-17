import React, { useState, useEffect } from "react";

import fire from "./fire";

import LogForm from "./LogForm";
import Dashboard from "../Dashboard/Dashboard";

const AllInOne = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPassswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
      setEmail('');
      setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPassswordError('');
  }

  const handleLogin = () => {
      clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
      clearErrors()
      fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      });
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const AuthListener  = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user)
            } else {
                setUser('')
            }
        })
    }

    useEffect(() => {
        AuthListener();
    }, [])

  return (
    <div>{user ? <Dashboard handleLogout={handleLogout}/> :  <LogForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      handleLogout={handleLogout}
    /> }
     
    </div>
  );
};

export default AllInOne;
