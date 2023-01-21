import classes from "./PadBank.module.css";

import DrumPad from "./DrumPad";

const PadBank = ({ sounds, playDrumPad, power }) => {
  return (
    <div className={classes["pad-bank"]}>
      <div className={classes["pad-bank__inner"]}>
        {sounds.map((sound) => (
          <DrumPad
            key={sound.id}
            sound={sound}
            power={power}
            playDrumPad={playDrumPad}
          />
        ))}
      </div>
    </div>
  );
};

export default PadBank;
