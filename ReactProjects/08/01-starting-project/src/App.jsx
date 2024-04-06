import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Gotvene"} targetTime={5}/>
        <TimerChallenge title={"Qdene"} targetTime={10}/>
        <TimerChallenge title={"Spane"} targetTime={2}/>
      </div>
    </>
  );
}

export default App;
