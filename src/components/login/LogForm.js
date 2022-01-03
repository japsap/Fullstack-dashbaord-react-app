import React, { useffect, useState } from "react";

import './Log.css'


import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Container = (props) => {
 
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    setName,
    name,
    onSubmit
  } = props;

  

  return (
    <div>
        <div className="background-square" >
        </div>

        {/* login form */}
        <form onSubmit={onSubmit}>
        <div className="login" >
        <Link to='/'><FiArrowLeft className="back__icon"/></Link>
            <div className="loginContainer">
                <div className="btnContainer">
                    {hasAccount ? (
                      <>

                      {/* Login container */}

                        <h1 className="log">Login</h1>

                        {/* email */}
                        <label>Email</label>
                        <input
                          type="text"
                          required
                          autoFocus
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{emailError}</p>
                        {/* email */}

                        {/* password */}
                          <label>Password</label>
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <p className="errorMsg">{passwordError}</p>
                        {/* password */}


                        <button className="butt" onClick={handleLogin}>Log in</button>
                        <p>Dont have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    

                      {/* Login container */}

                      </>
                    ):(
                      <>

                        {/* Sign in container */}
                        <h1 className="sign">Sign up</h1>

                          {/* user */}
                            <label>Username</label>
                            <input
                              type="text"
                              required
                              autoFocus
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          {/* user */}


                          {/* email */}
                          <label>Email</label>
                          <input
                            type="text"
                            required
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        <p className="errorMsg">{emailError}</p>
                        {/* email */}

                        {/* password */}
                          <label>Password</label>
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <p className="errorMsg">{passwordError}</p>
                            {/* password */}


                          <button className="butt" onClick={handleSignUp}>Sign up</button>
                          <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
                          {/* <label>Sign up</label> */}

                         {/* Sign in container */}

                      </>
                    )
                  }
                </div>
                {/* password */}
            </div>
        </div>
        </form>
    </div>
  );
};

export default Container;
