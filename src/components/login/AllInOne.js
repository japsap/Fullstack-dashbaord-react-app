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


  const [ name, setName] = useState('');
  const [tasks, setTasks] = useState('');

  const addUsername = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  
  const onSubmit = (e) => {
    e.preventDefault();
    addUsername({ name })

    setName(name)
  }


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
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
      clearErrors()
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassswordError(err.message);
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
    <div>{user ? 
        <Dashboard 
           handleLogout={handleLogout}
           ime={name}
        /> :  
      <LogForm
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
      onSubmit={onSubmit}
      setName={setName}
      name={name}
    /> }
     
    </div>
  );
};

export default AllInOne;
