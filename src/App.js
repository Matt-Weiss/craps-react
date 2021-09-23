import board from "./assets/table/board.png";
import Dice from "./components/Dice";
import Bankroll from "./components/Bankroll";
import BetArea from "./components/BetArea";
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import ChipRack from "./components/ChipRack";

function App() {
  return (
    <GlobalProvider>
      <div className="craps">
        <Bankroll />
        <div className="pass-line">
          <BetArea name="pass_line" />
        </div>
        <div className="chip-rack">
          <ChipRack />
        </div>
        <Dice />
      </div>
    </GlobalProvider>
  );
}

// 9/22/21 Apply results to pass line bet.

export default App;
