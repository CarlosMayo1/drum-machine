import classes from "./Control.module.css";

const Control = ({ name, state, onClick }) => {
  return (
    <div className={classes.control}>
      <p>{name}</p>
      <div className={`${classes.select} ${state}`}>
        <button className={classes.inner} onClick={onClick}></button>
      </div>
    </div>
  );
};

export default Control;
