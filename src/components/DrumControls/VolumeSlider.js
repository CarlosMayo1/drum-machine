import { Fragment } from "react";
import classes from "./VolumeSlider.module.css";

const VolumeSlider = ({ volume, handleVolumeChange }) => {
  return (
    <Fragment>
      <h2 className={classes["volume-title"]}>
        Volume {Math.round(volume * 100)}%
      </h2>
      <input
        className={classes["volume-slider"]}
        type="range"
        max="1"
        min="0"
        step="0.01"
        defaultValue={volume}
        onChange={handleVolumeChange}
      />
    </Fragment>
  );
};

export default VolumeSlider;
