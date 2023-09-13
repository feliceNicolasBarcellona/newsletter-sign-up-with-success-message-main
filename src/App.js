import { Fragment, useState } from "react";
import "./App.css";
// import Card from "./components/UI/Card";
import desktopImage from "./images/illustration-sign-up-desktop.svg";
import mobileImage from "./images/illustration-sign-up-mobile.svg";
import icon from "./images/icon-list.svg";
import iconSuccess from "./images/icon-success.svg";

const App = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailSubscription = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailIsValid = enteredEmail && emailRegex.test(enteredEmail);

    if (!enteredEmail) {
      setEnteredEmailIsValid(false);
      return;
    }

    if (emailIsValid) {
      setEnteredEmailIsValid(true);
      setIsToggled(!isToggled);
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setEnteredEmail("");
  };

  const emailInputClasses = `${
    enteredEmailIsValid ? "form-control" : "form-control"
  } ${!enteredEmailIsValid ? "invalid" : ""}`;

  return (
    <Fragment>
      <main>
        {!isToggled && (
          <div className="card">
            <img className="desktop-img" src={desktopImage} alt="" />
            <img className="mobile-img" src={mobileImage} alt="" />
            <div className="card-body">
              <p className="title">Stay updated!</p>
              <p className="subtitle">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <div className="list">
                <img className="list-icon" src={icon} alt="" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="list">
                <img className="list-icon" src={icon} alt="" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="list">
                <img className="list-icon" src={icon} alt="" />
                <p>And much more!</p>
              </div>
              <form onSubmit={emailSubscription}>
                <div className={emailInputClasses}>
                  <div className="labels">
                    <label htmlFor="">Email address</label>
                    {!enteredEmailIsValid && (
                      <p className="error-message invalid">
                        Valid email required
                      </p>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="email@company.com"
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                  />
                </div>
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
        )}

        {/* <!-- Success message start --> */}
        {isToggled && (
          <div className="success-card">
            <img src={iconSuccess} alt="" />
            <p className="title">Thanks for subscribing!</p>
            <p className="confirm-message">
              A confirmation email has been sent to ash@loremcompany.com. Please
              open it and click the button inside to confirm your subscription.
            </p>
            <button type="button" onClick={handleToggle}>
              Dismiss message
            </button>
          </div>
        )}
        {/* <!-- Success message end --> */}
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/feliceNicolasBarcellona">
          Felice Nicolas Barcellona
        </a>
        .
      </div>
    </Fragment>
  );
};

export default App;
