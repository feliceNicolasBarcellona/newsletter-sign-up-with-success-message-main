import classes from "./SuccessCard.module.css";
import iconSuccess from "../images/icon-success.svg";

const SuccessCard = (props) => {
  const handleToggle = () => {
    props.toggle();
  };

  return (
    <div className={classes["success-card"]}>
      <img src={iconSuccess} alt="icon-success" />
      <p className={classes.title}>Thanks for subscribing!</p>
      <p className={classes["confirm-message"]}>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button type="button" onClick={handleToggle}>
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessCard;
