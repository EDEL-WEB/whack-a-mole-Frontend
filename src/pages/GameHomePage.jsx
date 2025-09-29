import { Link } from "react-router-dom";

function GameHomePage() {
  return (
    <div>
      <h2>Game Home</h2>
      <p>Welcome to Whack-a-Mole! 🎉</p>
      <Link to="/play"><button>Start Game</button></Link>
      <Link to="/scores"><button>View Scores</button></Link>
    </div>
  );
}

export default GameHomePage;