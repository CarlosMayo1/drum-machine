import classes from "./App.module.css";

import DrumMachine from "./components/DrumMachine";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        FCC <i className="fa-brands fa-free-code-camp"></i>
      </div>
      <DrumMachine />
    </div>
  );
}

export default App;
