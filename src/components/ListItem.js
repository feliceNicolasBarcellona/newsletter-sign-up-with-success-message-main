import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.list}>
      <img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="" />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem