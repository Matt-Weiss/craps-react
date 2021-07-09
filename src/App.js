// import logo from './logo.svg';
import board from './assets/board.png'
import './App.css';

function App() {
  return (
    <div className="craps">
      <div className="game-container">
        <div className="game-info">info here</div>
        <img src={board} className="play-surface" alt=""/>
      </div>
    </div>
  );
}

export default App;
