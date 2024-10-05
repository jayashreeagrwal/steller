import React, { useState, useEffect } from 'react';

const Play = () => {
  const [points, setPoints] = useState(0);
  const [life, setLife] = useState(0);
  const [explored, setExplored] = useState([]);
  const [unexplored, setUnexplored] = useState([]);
  const [constID, setConstID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Initialize game state
    fetch('/newGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ constID: "Cassiopeia" })
    })
    .then(response => response.json())
    .then(data => {
      setPoints(data.points);
      setLife(data.life);
      setConstID(data.constID);
      setStart(data.start);
      setEnd(data.end);
      setExplored(data.explored);
      setUnexplored(data.unexplored);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (start !== "" && end !== "") {
      fetch('/guess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          choice: inputValue,
          constID: constID,
          explored: explored,
          unexplored: unexplored,
          start: start,
          end: end,
          life: life
        })
      })
      .then(response => response.json())
      .then(data => {
        setPoints(points + data.points);
        setLife(data.life);
        if (data.life < 1) {
          alert("You Lost");
        }
        if (data.msg === "Congratulations, You won!") {
          alert("Congratulations, You won!");
        }
        setExplored(data.explored);
        setUnexplored(data.unexplored);
        setMessage(data.msg);
      });
    } else {
      alert("Please Start Game");
    }
  };

  const handleNewGame = () => {
    fetch('/newGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ constID: "Cassiopeia" })
    })
    .then(response => response.json())
    .then(data => {
      setPoints(data.points);
      setLife(data.life);
      setConstID(data.constID);
      setStart(data.start);
      setEnd(data.end);
      setExplored(data.explored);
      setUnexplored(data.unexplored);
    });
  };

  return (
    <div>
      <p>Start: {start}</p>
      <br />
      <p>End: {end}</p>
      <br />
      <p>Life: {life}</p>
      <br />
      <p>Points: {points}</p>
      <br />
      <p>Explored: {explored.join(', ')}</p>
      <br />
      <p>{message}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Guess"
        />
        <button type="submit">Guess</button>
      </form>
      <br />
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
};

export default Play;