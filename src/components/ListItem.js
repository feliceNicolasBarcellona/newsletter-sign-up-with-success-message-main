import classes from "./ListItem.module.css";
import iconList from "../images/icon-list.svg"

const ListItem = (props) => {
  return (
    <div className={classes.list}>
      <img src={iconList} alt="icon-list" />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem