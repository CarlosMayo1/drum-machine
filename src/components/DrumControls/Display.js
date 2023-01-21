import classes from "./Display.module.css";

const Display = ({ displayName }) => {
  return (
    <p id="display" className={classes.display}>
      {displayName}
    </p>
  );
};

export default Display;
