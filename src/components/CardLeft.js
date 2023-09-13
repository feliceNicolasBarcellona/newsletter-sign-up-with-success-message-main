import classes from "./CardLeft.module.css";
import ListItem from "./ListItem";

const CardLeft = () => {
  return (
    <div className={classes.left}>
      <p className={classes.title}>Stay updated!</p>
      <p className={classes.subtitle}>
        Join 60,000+ product managers receiving monthly <br /> updates on:
      </p>
      <ListItem text="Product discovery and building what matters" />
      <ListItem text="Measuring to ensure updates are a success" />
      <ListItem text="And much more!" />
      <form>
        <div className={classes["form-control"]}>
          <label htmlFor="">Email address</label>
          <input type="text" placeholder="email@company.com" />
        </div>
        <button>Subscribe to monthly newsletter</button>
      </form>
    </div>
    );
};

export default CardLeft;
