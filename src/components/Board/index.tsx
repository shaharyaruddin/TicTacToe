import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<any>(Array(9).fill(""));
  const [currentPlayer,setCurrentPlayer]= useState('X')

  const handleBoard = (index: number) => {
    const newBoard: any = [...board];
  
  if(newBoard[index]==''){
    newBoard[index] = currentPlayer;
setBoard(newBoard)
  }
    
   setCurrentPlayer( currentPlayer == 'X' ? 'O' : 'X' )


   if(newBoard[0]=='X' && newBoard[1]=='X' && newBoard[2]== "X"  ){
alert('You won the match')
   }
   else if(newBoard[0]=='O' && newBoard[1]=='O' && newBoard[2]== "O"  ){
    alert('You won the match')
       }
 
  }

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