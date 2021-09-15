import board from "./assets/table/board.png";
import Die from "./components/dice";
import BetArea from "./components/BetArea";
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import ChipRack from "./components/ChipRack";

function App() {
  return (
    <GlobalProvider>
      <div className="craps">
        <div className="pass-line">
          <BetArea name="pass_line" />
          <ChipRack />
        </div>
        <div className="chip-rack"></div>
      </div>
    </GlobalProvider>
  );
}

// 9/22/21 Roll dice, Apply results to pass line bet. Read up on Context and Providers.

export default App;
