import { useEffect, useState } from "react";

const getLocalItems = () => {
  const saveItems = localStorage.getItem("items");
  if (saveItems) {
    return JSON.parse(saveItems);
  } else {
    return Array(9).fill("");
  }
};



const TicTacToe = () => {
  const [board, setBoard] = useState(getLocalItems());
  const [currentPlayer, setCurrentPlayer] = useState("X");


  const handleBoard = (index: number) => {
    const newBoard = [...board];

    if (newBoard[index] === "") {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      if (checkWinners(newBoard)) {
        setTimeout(() => {
          alert(`${currentPlayer} won the match`);
          resetBoard();
        }, 300);
        return;
      }
      
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
   
    
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
        return true;
      }
     
    }
    return ;
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(board));
  }, [board]);

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
  };

  const getCellBorder = (index: number) => {
    let borders = "";
    if (index < 6) borders += "border-b-4 ";
    if (index % 3 !== 2) borders += "border-r-4 ";
    return borders + "border-yellow-500";
  };

const handleReset=()=>{
  resetBoard()
}

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-[#060F36]">
        <div className="grid grid-cols-3 gap-0 w-80 h-80 sm:w-96 sm:h-96">
          {board.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className={`hover:cursor-pointer flex justify-center items-center text-5xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110 ${getCellBorder(
                  index
                )} ${
                  item === "X"
                    ? "text-pink-500 animate-pulse"
                    : "text-blue-500 animate-bounce"
                }`}
                onClick={() => handleBoard(index)}
              >
                <span
                  className={`transition-opacity duration-300 ease-in-out ${
                    item ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item}
                </span>
              </div>
            );
          })}

        </div>
      <div className="absolute bottom-10 cursor-pointer border rounded-md p-2 text-xl text-white font-bold italic" onClick={handleReset}>Reset</div>

      </div>

    </>
  );
};

export default TicTacToe;
