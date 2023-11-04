import { useState, useRef } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const email = useRef();
  const password = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };
  const AuthHandler = async e => {
    e.preventDefault();
    setIsLoading(true);
    const category = isLogin ? "Login" : "Signup";
    const response = await fetch(
      `https://mypprojectauth-default-rtdb.firebaseio.com/${category}.json`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value
        })
      }
    );
    const data = await response.json();
    if (data.name) {
      setIsLoading(false);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 3000);
    }
  };
  return (
    <section className={classes.auth}>
      <h1>
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form onSubmit={AuthForm}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={password} required />
        </div>
        <div className={classes.actions}>
          {!isloading
            ? <button
                type="submit"
                className={classes.button}
                onClick={AuthHandler}
              >
                {isLogin ? "SignIn" : "SignUp"}
              </button>
            : <p>Sending Request...</p>}
        </div>

        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
      {showMsg &&
        <ToastContainer
          className="p-3"
          position="top-center"
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Message</strong>
            </Toast.Header>
            <Toast.Body>
              {isLogin ? "Login SuccessFully" : "SignUp SuccessFully"}
            </Toast.Body>
          </Toast>
        </ToastContainer>}
    </section>
  );
};

export default AuthForm;
