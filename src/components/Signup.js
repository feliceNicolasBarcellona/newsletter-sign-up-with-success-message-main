import { useState } from "react";
import classes from "./Signup.module.css";
import Card from "./UI/Card";
import desktopImage from "../images/illustration-sign-up-desktop.svg";
import mobileImage from "../images/illustration-sign-up-mobile.svg";
import icon from "../images/icon-list.svg";
import ListItem from "./ListItem";

const Signup = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

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
      props.onEmailSubmit(enteredEmail);
    }
  };

  const emailInputClasses = `${
    enteredEmailIsValid ? classes["form-control"] : classes["form-control"]
  } ${!enteredEmailIsValid ? classes.invalid : ""}`;

  return (
    <Card>
      <img className={classes["desktop-img"]} src={desktopImage} alt="" />
      <img className={classes["mobile-img"]} src={mobileImage} alt="" />
      <div className={classes["card-body"]}>
        <p className={classes.title}>Stay updated!</p>
        <p className={classes.subtitle}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ListItem text="Product discovery and building what matters" />
        <ListItem text="Measuring to ensure updates are a success" />
        <ListItem text="And much more!" />
        <form onSubmit={emailSubscription}>
          <div className={emailInputClasses}>
            <div className={classes.labels}>
              <label htmlFor="">Email address</label>
              {!enteredEmailIsValid && (
                <p className={`${classes["error-message"]} ${classes.invalid}`}>
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
    </Card>
  );
};

export default Signup;
