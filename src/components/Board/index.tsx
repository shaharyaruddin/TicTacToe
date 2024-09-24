import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<any>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleBoard = (index: number) => {
    const newBoard: any = [...board];

    if (newBoard[index] == "") {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      if (checkWinners(newBoard)) {
        alert(`${currentPlayer} won the match`);

        resetBoard();
        return;
      }
    }

    setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  };

  const checkWinners = (board: string[]) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(combination[i]);

        return true;
      }
    }
    return false;
  };

  const resetBoard = () => {
    const remove = Array(9).fill("");
    setBoard(remove);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="grid grid-cols-3 gap-0 w-72 h-72">
          {board.map((item: string, index: number) => {
            return (
              <>
                <div
                  key={index}
                  className=" hover:cursor-pointer border border-black flex justify-center items-center text-4xl font-bold"
                  onClick={() => handleBoard(index)}
                >
                  {item}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
