import React from "react";

import './Log.css'

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
    
  } = props;

  return (
    <div>
      <div className="background-square">

      </div>
      <div className="login">
        <div className="loginContainer">
          <div className="btnContainer">
            {hasAccount ? (
              <>
                {/* email label */}
                <div>
                  <h2 className="log">Log in</h2>
                  <label>Email</label>
                  <input
                    type="email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="errorMsg">{emailError}</p>
                </div>
                {/* email label */}

                {/* password label */}
                <div>
                  <label>Password</label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="errorMsg">{passwordError}</p>
                </div>
                {/* password label */}
                <button className="butt" onClick={handleLogin}>
                  Sign in
                </button>
                <p>
                  Dont have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                {/* Username label */}
                <div>
                  <h2 className="sign">Sign in</h2>
                  <label>Email</label>
                  <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="errorMsg">{emailError}</p>
                </div>
                {/* Username label */}

                {/* passwordLabel */}
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="errorMsg">{passwordError}</p>
                </div>
                {/* end of the labels */}
                <button className="butt" onClick={handleSignUp}>
                  Sign up
                </button>
                <p>
                  Have an account?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
