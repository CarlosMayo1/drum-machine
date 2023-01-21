import classes from "./DrumControls.module.css";
import Control from "./Control";
import Display from "./Display";
import VolumeSlider from "./VolumeSlider";

const DrumControls = ({
  power,
  displayName,
  powerDrumMachine,
  switchSound,
  onSwitchSoundHandler,
  volume,
  handleVolumeChange,
}) => {
  return (
    <div className={classes["controls-container"]}>
      <div className={classes["controls-container__inner"]}>
        <Control
          name={`Power: ${power ? "Off" : "On"}`}
          state={power ? classes["selected-on"] : classes["selected-off"]}
          onClick={powerDrumMachine}
        />
        <Display displayName={displayName} />
        <VolumeSlider volume={volume} handleVolumeChange={handleVolumeChange} />
        <Control
          name={switchSound ? "Heater Kit" : "Smooth Piano Kit"}
          state={switchSound ? classes["selected-on"] : classes["selected-off"]}
          onClick={onSwitchSoundHandler}
        />
      </div>
    </div>
  );
};

export default DrumControls;
