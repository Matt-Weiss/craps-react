import board from './assets/table/board.png'
import Die from './components/dice'
import './App.css';

function App() {
  return (
    <div className="craps">
      <div className="game-container">
        <div className="game-info">
          <div className="dice-container">
            <Die/>
          </div>
        </div>
        <div className="play-surface">
          <img src={board} className="table-layout" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
