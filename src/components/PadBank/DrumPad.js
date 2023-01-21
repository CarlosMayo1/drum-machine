import { useEffect } from "react";
import classes from "./DrumPad.module.css";

const DrumPad = ({ playDrumPad, power, sound: { id, key, url, keyCode } }) => {
  const onDrumPadClickedHandler = () => {
    playDrumPad(key, id);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === keyCode) {
      playDrumPad(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDownHandler);
    if (!power) {
      document.removeEventListener("keydown", onKeyDownHandler, true);
    }
  }, []);

  return (
    <button
      id={keyCode}
      className={classes["drum-pad"]}
      onClick={power ? onDrumPadClickedHandler : null}
    >
      <audio className={classes.clip} id={key} src={power ? url : "#"}></audio>
      {key}
    </button>
  );
};

export default DrumPad;
