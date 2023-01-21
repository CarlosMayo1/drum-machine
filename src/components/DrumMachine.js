import { useState } from "react";

import { firstSoundsGroup, secondSoundsGroup } from "../DrumMachineSounds";
import classes from "./DrumMachine.module.css";

import PadBank from "./PadBank/PadBank";
import DrumControls from "./DrumControls/DrumControls";

const DrumMachine = () => {
  const [sounds, setSounds] = useState(firstSoundsGroup);
  const [power, setPower] = useState(true);
  const [switchSound, setSwitchSound] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [volume, setVolume] = useState("0.5");

  const onPlayDrumPadSound = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplayName(id);
  };

  const onPowerDrumMachineHandler = () => {
    setPower(!power);
    setDisplayName("");
  };

  const onSwitchSoundHandler = () => {
    setSwitchSound(!switchSound);
    if (sounds === firstSoundsGroup) {
      setSounds(secondSoundsGroup);
      setDisplayName("");
    }

    if (sounds === secondSoundsGroup) {
      setSounds(firstSoundsGroup);
      setDisplayName("");
    }
  };

  const setKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="drum-machine" className={classes["inner-container"]}>
      {setKeyVolume()}
      <PadBank sounds={sounds} playDrumPad={onPlayDrumPadSound} power={power} />
      <DrumControls
        power={power}
        powerDrumMachine={onPowerDrumMachineHandler}
        switchSound={switchSound}
        onSwitchSoundHandler={onSwitchSoundHandler}
        displayName={displayName}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
};

export default DrumMachine;
