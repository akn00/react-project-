import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleCellClick = (index) => {
    if (board[index] === null && !winner) {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setBoard(updatedBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      checkWinner(updatedBoard);
    }
  };

  function checkWinner(board) {
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null) && !winner) {
      setWinner("tie");
    }
  }

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="board-row">
            {renderCell(index)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      {renderBoard()}
      {winner && (
        <div className="result">
          {winner === "tie" ? "It's a tie!" : `Player ${winner} wins!`}
        </div>
      )}
      {!winner && (
        <div className="current-player">Current Player: {currentPlayer}</div>
      )}
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}
