import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<any>(Array(9).fill(""));

  const handleBoard = (index: number) => {
    const newBoard: any = [...board];

    if (newBoard == "") {
      newBoard[index] = "X";
      setBoard(newBoard);
    } 
    else if (newBoard == "X") {
      newBoard[index] = "0";
      setBoard(newBoard);
    } else {
      newBoard[index] = "X";
      setBoard(newBoard);
    }
  };

  return (
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
  );
};

export default TicTacToe;
