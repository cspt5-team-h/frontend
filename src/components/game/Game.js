import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import GamePad from "../gamePad/GamePad";
import Map from "../map/Map";
import Chat from "../chat/chat";
import "./game.css";
import Room from "../map/Room";

const Game = () => {
  const [gameState, setGameState] = useState({});

  useEffect(() => {
    axios
      .get("http://csp5.herokuapp.com/api/adv/init/", {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`
        }
      })
      .then(res =>
        setGameState({
          ...gameState,
          ...res.data
        })
      );
  }, []);

  return (
    <div>
      <div>
        <Room room={gameState} style={{ color: "yellow" }} />
      </div>
      <div className="game-container">
        <GamePad gameInfo={gameState} />
        <Map gameInfo={gameState} />
        <Chat gameInfo={gameState} />
      </div>
    </div>
  );
};

export default Game;
